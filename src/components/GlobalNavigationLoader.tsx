"use client";

import NextTopLoader from "nextjs-toploader";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

type NavCtx = { beginRouteChange: () => void };

const NavigationLoadContext = createContext<NavCtx | null>(null);

/** Call before `router.push` / `router.replace` so the overlay appears when navigation is not from a link click. */
export function useBeginRouteChange() {
  return useContext(NavigationLoadContext)?.beginRouteChange ?? (() => {});
}

type Props = { children: ReactNode };

/**
 * Top progress bar + short full-screen loader on internal navigations (links and programmatic).
 * Matches Zikhra gold palette.
 */
export default function GlobalNavigationLoader({ children }: Props) {
  const pathname = usePathname();
  const [overlay, setOverlay] = useState(false);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPath.current) {
      prevPath.current = pathname;
      const t = window.setTimeout(() => setOverlay(false), 280);
      return () => window.clearTimeout(t);
    }
  }, [pathname]);

  const beginRouteChange = useCallback(() => setOverlay(true), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]");
      if (!a) return;
      const link = a as HTMLAnchorElement;
      if (link.target === "_blank" || link.hasAttribute("download")) return;
      let url: URL;
      try {
        url = new URL(link.href, window.location.origin);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      setOverlay(true);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <NavigationLoadContext.Provider value={{ beginRouteChange }}>
      <NextTopLoader
        color="hsl(43, 74%, 49%)"
        initialPosition={0.06}
        crawlSpeed={130}
        height={3}
        crawl
        showSpinner={false}
        easing="cubic-bezier(0.4, 0, 0.2, 1)"
        speed={220}
        shadow="0 0 14px hsla(43, 74%, 49%, 0.5)"
        zIndex={99998}
      />
      {overlay ? (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-luxury-black/55 backdrop-blur-sm motion-safe:animate-[nav-overlay-in_0.2s_ease-out_forwards]"
          aria-live="polite"
          aria-busy="true"
          role="status"
          aria-label="Loading page"
        >
          <div className="flex flex-col items-center gap-5 rounded-2xl border border-gold/35 bg-card/95 px-12 py-10 shadow-2xl gold-glow">
            <div className="relative h-14 w-14">
              <div className="absolute inset-0 rounded-full border-2 border-gold/25" />
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold border-r-gold/70 animate-spin"
                style={{ animationDuration: "0.75s" }}
              />
            </div>
            <p className="font-serif text-xs tracking-[0.35em] uppercase gold-text">Loading</p>
          </div>
        </div>
      ) : null}
      {children}
    </NavigationLoadContext.Provider>
  );
}
