import Image from "next/image";
import Link from "next/link";
import Logo from "../app/icon.png";

const NavBar = () => {
  return (
    <nav className="fixed z-50 justify-between w-full border-b border-neutral-800 h-14 flex items-center align-middle text-foreground px-5 backdrop-blur-md">
      <Link className="flex gap-2 font-medium" href="/">
        <Image src={Logo} alt="Logo" height={24} width={24} />
        <p>Voluntra</p>
      </Link>
      {/* <div className="bg-transparent/30 rounded-full border border-neutral-800 py-2 px-3 flex flex-row gap-2">
        {siteConfig.links.map((link) => (
          <Link href={link.href} key={link.name}>
            {link.name}
          </Link>
        ))}
      </div> */}
      <div>Voluntra</div>
    </nav>
  );
};

export default NavBar;
