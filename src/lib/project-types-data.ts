import project2bhk from "@/assets/project-2bhk.webp";
import project3bhk from "@/assets/project-3bhk.webp";
import project4bhk from "@/assets/project-4bhk.webp";
import projectPenthouse from "@/assets/project-penthouse.webp";

export type ProjectTypeItem = {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  features: string[];
  rooms: { name: string; desc: string }[];
  pricing: string;
  timeline: string;
  idealFor: string[];
  designFocus: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  seoSections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const projectTypes: ProjectTypeItem[] = [
  {
    slug: "2bhk",
    title: "2 BHK Interior Design",
    tagline: "Smart Premium 2 BHK Interiors in Bangalore",
    heroImage: project2bhk.src,
    metaTitle: "Best 2 BHK Interior Design in Bangalore | Zikhra Interiors",
    metaDesc:
      "Transform your 2 BHK apartment with premium interior design in Bangalore. Modular kitchens, wardrobes, smart storage, false ceilings & more with clear scope planning.",
    intro:
      "A 2 BHK apartment demands smart design that maximizes every square foot without compromising on finish quality. At Zikhra Interiors, we create practical, premium, and signature 2 BHK interiors across Bangalore.",
    features: [
      "Space-optimized modular furniture",
      "Multi-functional living-dining layouts",
      "Compact modular kitchen with full functionality",
      "Built-in wardrobes with smart storage",
      "False ceiling and layered lighting plan",
      "Factory-finished shutters and durable hardware",
    ],
    rooms: [
      { name: "Living + Dining", desc: "Open-plan seating, TV unit, compact dining, shoe storage, and accent wall planning." },
      { name: "Master Bedroom", desc: "Wardrobe, bed back panel, side tables, dresser, and calm lighting for daily comfort." },
      { name: "Guest Bedroom", desc: "Space-saving wardrobe, study ledge, loft storage, and flexible furniture for guests or work." },
      { name: "Kitchen", desc: "Modular kitchen with tall unit options, appliance zones, pantry storage, and easy-clean finishes." },
    ],
    pricing: "Starts from Rs. 3.5 Lakhs",
    timeline: "30 - 45 Days",
    idealFor: [
      "Compact apartments that need maximum storage",
      "First homes, rental homes, and young families",
      "Owners who want a premium look within a practical budget",
    ],
    designFocus: [
      {
        title: "Storage Without Clutter",
        desc: "We plan wardrobes, lofts, kitchen units, TV storage, and hidden utility zones so a 2 BHK feels open while holding daily essentials.",
      },
      {
        title: "Compact Luxury Finishes",
        desc: "Laminates, acrylic, profile shutters, wallpapers, lighting, and hardware are selected to create a premium result without overbuilding the home.",
      },
      {
        title: "Easy Maintenance",
        desc: "Material choices are made for Bangalore apartment living, with practical surfaces for kitchens, wardrobes, and high-use living areas.",
      },
    ],
    process: [
      { title: "Floor Plan Review", desc: "We study room sizes, natural light, electrical points, and storage pressure before preparing the concept." },
      { title: "Design and Estimate", desc: "You receive a room-wise scope with finishes, furniture modules, and budget clarity before execution starts." },
      { title: "Factory Production", desc: "Approved modular furniture is produced with measured sizes, selected finishes, and hardware specifications." },
      { title: "Site Installation", desc: "Our team coordinates installation, finishing, cleanup, and handover with a practical timeline." },
    ],
    seoSections: [
      {
        heading: "2 BHK Interior Design in Bangalore for Smart Urban Homes",
        body:
          "A 2 BHK home in Bangalore needs careful space planning because every wall, corner, and circulation path matters. Zikhra Interiors designs compact homes with modular kitchens, wardrobes, TV units, false ceilings, lighting, and storage-led furniture that improves daily use without making the apartment feel heavy.",
      },
      {
        heading: "What Makes Our 2 BHK Interiors Practical",
        body:
          "We focus on kitchen workflow, bedroom storage, living room movement, dining placement, and finishes that suit repeated use. The result is a home that looks premium in photos and remains comfortable for real family routines.",
      },
    ],
    faqs: [
      {
        q: "What is the cost of 2 BHK interior design in Bangalore?",
        a: "Zikhra prepares a room-wise estimate after reviewing your floor plan, storage needs, finishes, and site conditions.",
      },
      {
        q: "Can you design a 2 BHK with a small kitchen?",
        a: "Yes. We plan compact modular kitchens with corner storage, tall units, appliance zones, and practical worktop space.",
      },
      {
        q: "How long does a 2 BHK interior project take?",
        a: "Most 2 BHK interiors take around 30 to 45 days after design approval, depending on scope and site readiness.",
      },
    ],
  },
  {
    slug: "3bhk",
    title: "3 BHK Interior Design",
    tagline: "Spacious Premium 3 BHK Interiors in Bangalore",
    heroImage: project3bhk.src,
    metaTitle: "Premium 3 BHK Interior Design Bangalore | Zikhra Interiors",
    metaDesc:
      "Premium 3 BHK interior design in Bangalore. Complete home interiors with modular kitchen, wardrobes, living room & more with clear scope planning.",
    intro:
      "A 3 BHK home is the perfect canvas for creating distinct zones for entertainment, relaxation, productivity, and family storage.",
    features: [
      "Separate living and family room design",
      "Premium modular kitchen with island option",
      "Three wardrobe and bedroom concepts",
      "Study, pooja, or guest room customization",
      "False ceiling with ambient and task lighting",
      "TV unit, foyer, crockery, and utility storage",
    ],
    rooms: [
      { name: "Grand Living Room", desc: "Statement sofa, accent wall, chandelier, entertainment unit, and balanced circulation." },
      { name: "Master Suite", desc: "Premium wardrobe, bed wall, dresser, side storage, and layered lighting for a refined bedroom." },
      { name: "Kids or Guest Bedroom", desc: "Flexible wardrobe, study table, display shelves, and easy-maintenance surfaces." },
      { name: "Kitchen + Utility", desc: "Modular kitchen with breakfast counter or island option, pantry, appliances, and utility planning." },
    ],
    pricing: "Starts from Rs. 5.5 Lakhs",
    timeline: "45 - 60 Days",
    idealFor: [
      "Growing families who need defined zones",
      "Homes with work-from-home or study requirements",
      "Apartments that need a premium turnkey interior scope",
    ],
    designFocus: [
      {
        title: "Zone-Based Planning",
        desc: "We separate public, private, work, and storage zones so the home feels organized even when multiple people use it at once.",
      },
      {
        title: "Premium Shared Spaces",
        desc: "The living, dining, foyer, and kitchen are designed to feel connected, welcoming, and visually consistent.",
      },
      {
        title: "Personalized Bedrooms",
        desc: "Each bedroom receives a different storage and mood plan based on user age, lifestyle, work needs, and maintenance expectations.",
      },
    ],
    process: [
      { title: "Lifestyle Mapping", desc: "We understand family routines, storage habits, work needs, guests, and preferred design style." },
      { title: "Concept and Material Selection", desc: "Layouts, finishes, colors, lighting, and room-wise furniture are finalized with budget visibility." },
      { title: "Production and Site Prep", desc: "Modular units are manufactured while site services, ceilings, and electrical changes are coordinated." },
      { title: "Installation and Styling", desc: "Furniture, fittings, lighting, and final styling are completed before handover." },
    ],
    seoSections: [
      {
        heading: "3 BHK Interior Design in Bangalore for Complete Family Living",
        body:
          "A 3 BHK interior project needs more than attractive furniture. It needs a plan for storage, privacy, entertainment, remote work, children's spaces, guest use, kitchen workflow, and long-term maintenance. Zikhra Interiors creates complete 3 BHK interiors in Bangalore with modular execution and a coordinated design language across the home.",
      },
      {
        heading: "Turnkey 3 BHK Interiors With Clear Scope",
        body:
          "Our 3 BHK packages can include modular kitchen, wardrobes, TV unit, foyer, crockery unit, pooja unit, study, false ceiling, lighting, wallpaper, soft furnishings, and decor support. The final scope is customized after reviewing the apartment layout and your priorities.",
      },
    ],
    faqs: [
      { q: "What does a 3 BHK interior package include?", a: "It can include modular kitchen, wardrobes, false ceiling, TV unit, foyer, crockery, study, pooja unit, lighting, and decor based on the selected scope." },
      { q: "Can each bedroom have a different design theme?", a: "Yes. We keep the overall home language consistent while customizing each bedroom for the person using it." },
      { q: "How much time is needed for a 3 BHK interior project?", a: "A typical 3 BHK interior project takes around 45 to 60 days after final design approval and site readiness." },
    ],
  },
  {
    slug: "4bhk",
    title: "4 BHK Interior Design",
    tagline: "Grand 4 BHK Villa & Apartment Interiors in Bangalore",
    heroImage: project4bhk.src,
    metaTitle: "Premium 4 BHK Interior Design Bangalore | Zikhra Interiors",
    metaDesc:
      "Grand 4 BHK villa & apartment interior design in Bangalore. Complete premium interiors with quality materials and supervised execution.",
    intro:
      "A 4 BHK home demands grandeur. Every space is crafted to feel refined, functional, and premium with strong material and lighting discipline.",
    features: [
      "Double-height living room or grand formal living design",
      "Premium marble, veneer, fluted, and textured finishes",
      "Four bedroom concepts with dedicated storage planning",
      "Kitchen, utility, bar, pooja, and family lounge options",
      "Designer lighting and false ceiling coordination",
      "End-to-end supervision for villas and large apartments",
    ],
    rooms: [
      { name: "Grand Foyer", desc: "Impressive entrance with console, mirror, statement lighting, and material-led first impression." },
      { name: "Formal Living", desc: "Premium seating, feature wall, chandelier, display storage, and hospitality-focused layout." },
      { name: "Master Suite", desc: "Walk-in wardrobe or large wardrobe, bed wall, dresser, lounge chair, and warm layered lighting." },
      { name: "Family Lounge", desc: "Relaxed entertainment zone with media unit, soft seating, storage, and optional bar or library wall." },
    ],
    pricing: "Starts from Rs. 8.5 Lakhs",
    timeline: "60 - 90 Days",
    idealFor: [
      "Large apartments, duplex homes, and villas",
      "Families who want formal and private living zones",
      "Premium turnkey interiors with detailed material planning",
    ],
    designFocus: [
      {
        title: "Luxury Scale and Proportion",
        desc: "Large homes need balanced furniture sizes, ceiling heights, wall treatments, lighting layers, and focal points so spaces feel composed.",
      },
      {
        title: "Material Discipline",
        desc: "We coordinate veneer, stone, glass, metal, premium laminates, fabrics, and lighting so the home feels rich without visual noise.",
      },
      {
        title: "Whole-Home Coordination",
        desc: "From foyer to bedrooms, the design language is planned as one complete home with room-specific details where they matter.",
      },
    ],
    process: [
      { title: "Site and Requirement Study", desc: "We review drawings, room functions, family requirements, and premium feature opportunities." },
      { title: "Luxury Concept Development", desc: "Material boards, lighting direction, room concepts, and scope priorities are aligned before production." },
      { title: "Detailed Execution Planning", desc: "Furniture, ceiling, lighting, wall finishes, and service coordination are sequenced for smoother site progress." },
      { title: "Supervised Handover", desc: "Installation, finishing, snag checks, and final styling are handled with close supervision." },
    ],
    seoSections: [
      {
        heading: "4 BHK Interior Design in Bangalore for Premium Apartments and Villas",
        body:
          "A 4 BHK home has the scale to include formal living, family lounge, multiple bedrooms, pooja room, utility, bar, study, and guest spaces. Zikhra Interiors designs premium 4 BHK interiors in Bangalore with a strong focus on proportion, materials, lighting, storage, and supervised execution.",
      },
      {
        heading: "High-End Interiors With Practical Daily Function",
        body:
          "Luxury interiors must still work every day. We plan wardrobes, kitchen storage, appliance positions, service access, seating flow, lighting controls, and durable finishes so the home feels elegant and remains easy to live in.",
      },
    ],
    faqs: [
      { q: "Do you design 4 BHK villas too?", a: "Yes. We handle 4 BHK apartments, duplex homes, and villas across Bangalore." },
      { q: "Can you include premium finishes like veneer and marble?", a: "Yes. We can plan veneer, marble, glass, metal accents, premium laminates, and designer lighting based on the project budget." },
      { q: "How long does a 4 BHK interior project take?", a: "Most 4 BHK projects take around 60 to 90 days after design approval, depending on size, site condition, and selected finishes." },
    ],
  },
  {
    slug: "penthouse",
    title: "Penthouse Interior Design",
    tagline: "Elevated Penthouse Interiors in Bangalore",
    heroImage: projectPenthouse.src,
    metaTitle: "Premium Penthouse Interior Design Bangalore | Zikhra Interiors",
    metaDesc:
      "Premium penthouse interior design in Bangalore. Bespoke designs with panoramic views, premium materials & smart automation. Custom scope planning.",
    intro:
      "A penthouse is not just a home - it is a statement. We create elevated penthouse interiors with refined materials, spatial drama, and turnkey execution.",
    features: ["Panoramic living room with floor-to-ceiling glass", "Private terrace design"],
    rooms: [
      { name: "Sky Lounge", desc: "Panoramic living space with designer furniture, city views, and layered evening lighting." },
      { name: "Private Terrace", desc: "Outdoor seating, deck options, planters, lighting, and entertaining-friendly layout." },
      { name: "Master Suite", desc: "Luxury bedroom with walk-in storage, premium headboard, lounge corner, and hotel-like detailing." },
      { name: "Entertainment Zone", desc: "Media wall, bar, display, acoustic comfort, and relaxed seating for hosting." },
    ],
    pricing: "Custom estimate after site review",
    timeline: "90 - 120 Days",
    idealFor: [
      "Large homes with views, terraces, or duplex layouts",
      "Owners who want bespoke luxury interiors",
      "Projects requiring premium detailing and custom scope",
    ],
    designFocus: [
      {
        title: "View-Led Planning",
        desc: "Furniture, lighting, partitions, and focal walls are planned to respect the best views and natural light in the home.",
      },
      {
        title: "Bespoke Detailing",
        desc: "Custom furniture, premium materials, statement walls, walk-in wardrobes, bars, and terrace zones are developed around the lifestyle brief.",
      },
      {
        title: "Entertainment Comfort",
        desc: "Penthouse layouts often need lounge, dining, terrace, and media zones that support hosting without compromising privacy.",
      },
    ],
    process: [
      { title: "Luxury Brief", desc: "We document lifestyle, hosting needs, privacy expectations, view priorities, and preferred material language." },
      { title: "Concept and Mood Boards", desc: "Room concepts, finish palettes, lighting direction, and custom elements are developed for approval." },
      { title: "Custom Production", desc: "Bespoke furniture and modular elements are produced with detailed measurements and material specifications." },
      { title: "Premium Installation", desc: "Site work, styling, and handover are coordinated with attention to finish quality." },
    ],
    seoSections: [
      {
        heading: "Penthouse Interior Design in Bangalore With Bespoke Luxury",
        body:
          "A penthouse needs interior design that understands scale, privacy, views, outdoor zones, and premium living. Zikhra Interiors creates penthouse interiors in Bangalore with custom furniture, rich materials, layered lighting, terrace planning, entertainment spaces, and refined bedroom suites.",
      },
      {
        heading: "Designed Around Views, Hosting, and Everyday Comfort",
        body:
          "We plan the penthouse around natural light, city views, room flow, storage, and hosting needs. Every zone is designed to feel elevated while staying comfortable for daily use.",
      },
    ],
    faqs: [
      { q: "Do you offer turnkey penthouse projects?", a: "Yes. We offer end-to-end turnkey penthouse interior solutions with custom scope planning." },
      { q: "Can you design terrace and outdoor spaces?", a: "Yes. We can plan terrace seating, lighting, decking, planters, and entertainment-friendly layouts." },
      { q: "Why is penthouse interior pricing custom?", a: "Penthouse projects vary widely in size, terrace scope, material choices, customization, and site requirements, so we estimate after review." },
    ],
  },
];

export function getProjectTypeBySlug(slug: string) {
  return projectTypes.find((p) => p.slug === slug) ?? null;
}
