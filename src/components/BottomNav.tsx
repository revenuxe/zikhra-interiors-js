import { Home, LayoutGrid, Briefcase, User, MessageCircle } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: LayoutGrid, label: "Projects" },
  { icon: null, label: "WhatsApp" },
  { icon: Briefcase, label: "Services" },
  { icon: User, label: "Profile" },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-nav safe-area-bottom">
      <div className="flex items-end justify-around px-2 pt-2 pb-2">
        {navItems.map((item, i) => {
          if (i === 2) {
            return (
              <a
                key={item.label}
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="relative -mt-5 flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center animate-pulse-gold shadow-xl">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-[10px] font-sans text-gold mt-1">{item.label}</span>
              </a>
            );
          }

          const Icon = item.icon!;
          return (
            <button
              key={item.label}
              className="flex flex-col items-center py-1 px-3 group"
            >
              <Icon className="w-5 h-5 text-muted-foreground transition-colors group-hover:text-gold" />
              <span className="text-[10px] font-sans text-muted-foreground mt-1 transition-colors group-hover:text-gold">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
