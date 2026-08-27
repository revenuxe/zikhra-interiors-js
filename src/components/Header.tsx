import Link from "next/link";
import logo from "@/assets/zikhra-design-logo.webp";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="flex items-center justify-start py-3 px-5">
        <Link href="/">
          <img src={logo.src} alt="Zikhra - Best Interior Designers in Bangalore" className="h-14 w-auto sm:h-16" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
