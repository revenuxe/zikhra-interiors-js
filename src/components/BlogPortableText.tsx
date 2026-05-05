import type { PortableTextComponents } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import { PortableText } from "@portabletext/react";

type BodyImageValue = {
  _type?: string;
  alt?: string;
  asset?: { url?: string | null } | null;
};

function bodyImageUrl(value: BodyImageValue): string | undefined {
  const a = value.asset;
  return typeof a === "object" && a && "url" in a ? (a.url ?? undefined) : undefined;
}

export const blogPortableTextComponents: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p className="mb-5 last:mb-0 leading-relaxed text-muted-foreground whitespace-pre-wrap break-words">{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="my-6 border-l-2 border-gold/50 pl-4 italic text-muted-foreground">{children}</blockquote>
      ),
      h1: ({ children }) => <h1 className="font-serif text-3xl font-bold text-gold mt-10 mb-4 first:mt-0">{children}</h1>,
      h2: ({ children }) => <h2 className="font-serif text-2xl font-bold text-gold mt-10 mb-3 first:mt-0">{children}</h2>,
      h3: ({ children }) => <h3 className="font-serif text-xl font-semibold text-gold mt-8 mb-3 first:mt-0">{children}</h3>,
      h4: ({ children }) => <h4 className="font-serif text-lg font-semibold text-foreground mt-6 mb-2 first:mt-0">{children}</h4>,
      h5: ({ children }) => <h5 className="font-serif text-base font-semibold text-foreground mt-6 mb-2">{children}</h5>,
      h6: ({ children }) => <h6 className="font-serif text-sm font-semibold text-foreground mt-6 mb-2">{children}</h6>,
    },
    list: {
      bullet: ({ children }) => <ul className="my-4 list-disc pl-6 space-y-2 text-muted-foreground">{children}</ul>,
      number: ({ children }) => <ol className="my-4 list-decimal pl-6 space-y-2 text-muted-foreground">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
      number: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
    },
    marks: {
      link: ({ children, value }) => {
        const href = (value as { href?: string } | undefined)?.href ?? "#";
        const external = href.startsWith("http");
        return (
          <a
            href={href}
            className="text-gold underline underline-offset-2 hover:no-underline"
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({ value, isInline }) => {
        const v = value as BodyImageValue;
        const url = bodyImageUrl(v);
        if (!url) return null;
        const alt = (typeof v.alt === "string" && v.alt) || "";
        const img = (
          <img
            src={url}
            alt={alt}
            loading="lazy"
            className={
              isInline
                ? "inline-block max-h-40 w-auto rounded-md align-middle"
                : "w-full rounded-xl object-cover"
            }
          />
        );
        if (isInline) return img;
        return (
          <figure className="my-8">
            {img}
          </figure>
        );
      },
    },
};

export default function BlogPortableText({ value }: { value: TypedObject[] }) {
  return <PortableText value={value} components={blogPortableTextComponents} />;
}
