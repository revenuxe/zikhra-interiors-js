"use client";

import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Priya Reddy",
    location: "Jubilee Hills, Hyderabad",
    quote: "Zikhra transformed our villa into a masterpiece. Every detail was perfect, beyond our expectations.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Gachibowli, Hyderabad",
    quote: "The attention to detail and premium quality is unmatched. Our apartment looks straight out of a magazine.",
    rating: 5,
  },
  {
    name: "Ananya Sharma",
    location: "Banjara Hills, Hyderabad",
    quote: "Professional, timely, and stunning results. Best interior designers in Hyderabad, hands down.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding">
      <div className="text-center mb-10">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Testimonials</p>
        <h2 className="font-serif text-3xl md:text-4xl gold-text">What Hyderabad Says</h2>
      </div>

      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center gap-1 mb-5">
          {Array.from({ length: testimonials[active].rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
          ))}
        </div>
        <p className="font-sans text-foreground/90 text-base italic leading-relaxed mb-4">
          "{testimonials[active].quote}"
        </p>
        <div className="w-10 h-10 rounded-full gold-gradient mx-auto flex items-center justify-center mb-2">
          <span className="font-serif text-sm text-primary-foreground">{testimonials[active].name[0]}</span>
        </div>
        <p className="font-sans text-sm text-gold">{testimonials[active].name}</p>
        <p className="font-sans text-xs text-muted-foreground mt-0.5">{testimonials[active].location}</p>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 gold-gradient" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
