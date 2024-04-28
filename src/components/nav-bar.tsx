import Image from "next/image";
import Link from "next/link";
import Logo from "../app/icon.png";
import Button from "./ui/button";

const NavBar = () => {
  return (
    <header className="fixed z-50 justify-between w-full border-b border-neutral-800 h-14 flex items-center align-middle text-foreground px-5 backdrop-blur-[10px]">
      <Link className="flex gap-2 font-medium items-center" href="/">
        <Image src={Logo} alt="Logo" className="h-8 w-8" />
        <h1>Voluntra</h1>
      </Link>
      <nav>
        <Button>
          <Link href="#downloads">Install now</Link>
        </Button>
      </nav>
    </header>
  );
};

export default NavBar;
