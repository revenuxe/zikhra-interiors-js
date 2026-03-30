type SeoJsonLdProps = {
  id: string;
  json: string;
};

export default function SeoJsonLd({ id, json }: SeoJsonLdProps) {
  return <script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
