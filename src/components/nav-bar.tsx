'use client';

import siteConfig from '@/config/site';
import socials from '@/config/socials';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../app/apple-icon.png';
import NavElement from './ui/nav-element';

const NavBar = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.2 } },
  };

  return (
    <motion.header
      className="fixed z-50 flex h-14 w-full items-center border-b border-neutral-800 px-5 align-middle text-foreground backdrop-blur-sm xl:h-16"
      variants={variants}
      initial="hidden"
      animate="show"
    >
      <div className="flex w-full justify-between xl:container xl:mx-auto">
        <Link className="flex items-center gap-2 font-medium" href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="size-10 select-none rounded-xl xl:size-12"
          />
          <h1 className="md:text-md font-medium xl:text-xl">
            {siteConfig.title}
          </h1>
        </Link>
        <nav className="flex flex-row items-center justify-center gap-1 align-middle">
          {socials.map(({ alt, href, image }, i) => (
            <NavElement key={i} alt={alt} href={href} image={image} />
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default NavBar;
