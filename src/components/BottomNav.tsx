"use client";

import { Home, FolderKanban, Wrench, Send } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import whatsappIcon from "@/assets/whatsapp.svg";

const navItems = [
  { icon: Home, label: "Home", to: "/" },
  { icon: FolderKanban, label: "Projects", to: "/projects" },
  { icon: null, label: "Enquire", to: "/contact" },
  { icon: Wrench, label: "Services", to: "/services" },
  { icon: Send, label: "Contact", to: "/contact" },
];

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-nav safe-area-bottom">
      <div className="flex items-end justify-around px-2 pt-2 pb-2">
        {navItems.map((item, i) => {
          if (i === 2) {
            return (
              <Link
                key={item.label}
                className="relative -mt-5 flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center animate-pulse-gold shadow-xl">
                  <img src={whatsappIcon.src} alt="WhatsApp" className="w-7 h-7 brightness-0" />
                </div>
                <span className="text-[10px] font-sans text-gold mt-1">{item.label}</span>
              </Link>
            );
          }

          const Icon = item.icon!;
          const isActive = pathname === item.to;

          return (
            <Link
              key={item.label}
              href={item.to}
              className="flex flex-col items-center py-1 px-3 group"
            >
              <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-gold" : "text-muted-foreground group-hover:text-gold"}`} />
              <span className={`text-[10px] font-sans mt-1 transition-colors ${isActive ? "text-gold" : "text-muted-foreground group-hover:text-gold"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
