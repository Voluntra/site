"use client";

import siteConfig from "@/config/site";
import socials from "@/config/socials";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from "../app/apple-icon.png";
import NavElement from "./ui/nav-element";

const NavBar = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.2 } },
  };

  return (
    <motion.header
      className="fixed z-50 justify-between w-full border-b border-neutral-800 h-14 flex items-center align-middle text-foreground px-5 backdrop-blur-sm"
      variants={variants}
      initial="hidden"
      animate="show"
    >
      <Link className="flex gap-2 font-medium items-center" href="/">
        <Image src={Logo} alt="Logo" className="size-8 select-none" />
        <h1>{siteConfig.title}</h1>
      </Link>
      <nav className="flex flex-row items-center justify-center align-middle gap-1">
        {socials.map(({ alt, href, image }, i) => (
          <NavElement key={i} alt={alt} href={href} image={image} />
        ))}
      </nav>
    </motion.header>
  );
};

export default NavBar;
