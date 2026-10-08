const brands = [
  { name: "Saudia", image: "saudia.png" },
  { name: "Qatar Airways", image: "qatar-airways.svg" },
  { name: "Etihad Airways", image: "etihad.svg" },
  { name: "IndiGo", image: "indigo.svg" },
  { name: "Air India", image: "air-india.svg" },
  { name: "Hilton", image: "hilton.svg" },
];

function BrandRow({ duplicate = false }: { duplicate?: boolean }) {
  return <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12" aria-hidden={duplicate || undefined}>
    {brands.map(brand => <div key={brand.name} className="flex h-14 w-32 shrink-0 items-center justify-center sm:h-16 sm:w-36">
      <img src={`/travel/brands/${brand.image}`} alt={duplicate ? "" : brand.name} loading="lazy" className={`w-auto max-w-full object-contain ${brand.name === "Hilton" ? "max-h-11" : "max-h-10"}`} />
    </div>)}
  </div>;
}

export default function TravelBrands() {
  return <section className="overflow-hidden border-b border-black/5 bg-[#faf9f6] py-7 sm:py-9" aria-labelledby="travel-brands-title">
    <div className="mx-auto max-w-7xl px-5 sm:px-10">
      <div className="mb-5 flex items-center gap-4"><span className="h-px flex-1 bg-black/10"/><h2 id="travel-brands-title" className="shrink-0 text-center font-sans text-xs font-medium uppercase tracking-[0.18em] text-[#66615a]">Airlines & Hotels</h2><span className="h-px flex-1 bg-black/10"/></div>
      <div className="partner-marquee travel-brands-marquee min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] motion-reduce:overflow-x-auto hide-scrollbar" role="region" aria-label="Airline and hotel logos" tabIndex={0}>
        <div className="partner-marquee__track travel-brands-track"><BrandRow/><BrandRow duplicate/></div>
      </div>
    </div>
  </section>;
}

