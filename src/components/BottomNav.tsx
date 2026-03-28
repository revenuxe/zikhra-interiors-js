import { Home, FolderKanban, Wrench, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import whatsappIcon from "@/assets/whatsapp.svg";

const navItems = [
  { icon: Home, label: "Home", to: "/" },
  { icon: FolderKanban, label: "Projects", to: "/projects" },
  { icon: null, label: "WhatsApp", to: "" },
  { icon: Wrench, label: "Services", to: "/services" },
  { icon: MessageSquare, label: "Contact", to: "/contact" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-nav safe-area-bottom">
      <div className="flex items-end justify-around px-2 pt-2 pb-2">
        {navItems.map((item, i) => {
          if (i === 2) {
            return (
              <a
                key={item.label}
                href="https://wa.me/919886285028"
                target="_blank"
                rel="noopener noreferrer"
                className="relative -mt-5 flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center animate-pulse-gold shadow-xl">
                  <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7 brightness-0" />
                </div>
                <span className="text-[10px] font-sans text-gold mt-1">{item.label}</span>
              </a>
            );
          }

          const Icon = item.icon!;
          const isActive = location.pathname === item.to;

          return (
            <Link
              key={item.label}
              to={item.to}
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
