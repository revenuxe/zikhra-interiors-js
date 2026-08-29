import asianPaintsLogo from "@/assets/partners/asian-paints.webp";
import blumLogo from "@/assets/partners/blum.webp";
import elicaLogo from "@/assets/partners/elica.webp";
import faberLogo from "@/assets/partners/faber.webp";
import hettichLogo from "@/assets/partners/hettich.webp";

const partners = [
  { name: "Hettich", logo: hettichLogo },
  { name: "Faber", logo: faberLogo },
  { name: "Asian Paints", logo: asianPaintsLogo },
  { name: "Elica", logo: elicaLogo },
  { name: "Blum", logo: blumLogo },
];

function PartnerLogos({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex min-w-max shrink-0 items-center gap-9 pr-9 sm:gap-12 sm:pr-12 lg:gap-16 lg:pr-16" aria-hidden={hidden || undefined}>
      {partners.map((partner) => (
        <div key={partner.name} className="flex h-11 w-24 shrink-0 items-center justify-center sm:h-12 sm:w-28 lg:h-14 lg:w-32">
          <img
            src={partner.logo.src}
            alt={hidden ? "" : `${partner.name} logo`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function TrustedPartners() {
  return (
    <section className="overflow-hidden bg-[#f8f8f7] py-10 sm:py-12" aria-labelledby="trusted-partners-heading">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-10 lg:flex-row lg:items-center lg:gap-20 lg:px-16">
        <h2 id="trusted-partners-heading" className="shrink-0 font-sans text-3xl font-light leading-[0.97] tracking-[-0.07em] text-[#171717] md:text-4xl">
          Trusted partners
        </h2>
        <div className="partner-marquee min-w-0 overflow-hidden lg:flex-1" role="region" aria-label="Trusted partner logos">
          <div className="partner-marquee__track">
            <PartnerLogos />
            <PartnerLogos hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
