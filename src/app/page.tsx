import ScrollToTopNext from "@/components/ScrollToTopNext";

export default function HomePage() {
  return (
    <>
      <ScrollToTopNext />
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
        <section className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif gold-text mb-4">
            Umrah & Hajj Travel from Bangalore & Bengaluru
          </h1>
          <p className="text-muted-foreground text-sm md:text-base font-sans">
            Best travel planner for premium Umrah journeys in Bangalore and Bengaluru.
          </p>
        </section>
      </main>
    </>
  );
}
