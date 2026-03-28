import logo from "@/assets/zikhra-logo.webp";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="flex items-center justify-center py-3 px-5">
        <img src={logo} alt="Zikhra - Best Interior Designers in Hyderabad" className="h-16 w-auto" />
      </div>
    </header>
  );
};

export default Header;
