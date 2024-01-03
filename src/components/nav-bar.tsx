import Image from "next/image";
import Link from "next/link";
import Logo from "../app/icon.png";
import Button from "./ui/button";

const NavBar = () => {
  return (
    <nav className="fixed z-50 justify-between w-full border-b border-neutral-800 h-14 flex items-center align-middle text-foreground px-5 backdrop-blur-md">
      <Link className="flex gap-2 font-medium" href="/">
        <Image src={Logo} alt="Logo" height={24} width={24} />
        <p>Voluntra</p>
      </Link>
      <Button>Install now </Button>
    </nav>
  );
};

export default NavBar;
