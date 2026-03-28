import kitchenImg from "@/assets/kitchen.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import livingroomImg from "@/assets/livingroom.jpg";
import wardrobeImg from "@/assets/wardrobe.jpg";

const categories = [
  { name: "Kitchen", image: kitchenImg },
  { name: "Bedroom", image: bedroomImg },
  { name: "Living Room", image: livingroomImg },
  { name: "Wardrobe", image: wardrobeImg },
];

const PortfolioPreview = () => {
  return (
    <section className="section-padding">
      <div className="text-center mb-10">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Portfolio</p>
        <h2 className="font-serif text-3xl md:text-4xl gold-text">Our Craft</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-5 px-5 snap-x snap-mandatory">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="relative flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden group snap-center cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy"
              width={800}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-serif text-xl text-foreground">{cat.name}</h3>
              <div className="w-8 h-0.5 gold-gradient mt-2 transition-all duration-300 group-hover:w-14" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioPreview;
