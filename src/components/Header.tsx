import Link from "next/link";
const logo = { src: "/travel/zikhra-travel-logo.svg" };

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="mx-auto flex max-w-7xl items-center justify-start px-6 py-3 sm:px-10 lg:px-16">
        <Link href="/">
          <img src={logo.src} alt="Zikhra Tours & Travels" width={1080} height={387} className="h-14 w-auto sm:h-16" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
