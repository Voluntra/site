"use client";

import { Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GitHub from "../../public/github.png";
import Logo from "../app/icon.png";
import Button from "./ui/button";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer>
      <div className="p-smPage sm:px-page sm:py-0">
        <Separator
          orientation="horizontal"
          decorative
          className="bg-neutral-700 h-px "
        />
      </div>
      <nav className="flex p-smPage pt-0 sm:p-page justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex justify-evenly align-middle items-center space-x-2">
            <div className="flex items-center align-middle space-x-2">
              <Image src={Logo} alt="Logo" className="h-7 w-7 opacity-75" />
              <p className="text-neutral-400 text-lg font-semibold">Voluntra</p>
            </div>
            <Separator
              orientation="vertical"
              decorative
              className="bg-neutral-700 h-6"
            />
            <Button size="icon" className="opacity-70 h-8 w-8" variant="ghost">
              <Link
                href="https://github.com/Voluntra"
                className="p-[6px]"
                target="_blank"
              >
                <Image src={GitHub} alt="Github Logo" />
              </Link>
            </Button>
          </div>
          <p className="text-neutral-500 text-sm">
            Copyright © Voluntra {new Date().getFullYear()}
          </p>
        </div>
        <div className="sm:flex gap-2 items-center justify-center align-middle text-neutral-500 hidden">
          <Rocket className="text-purple-400" />
          <p>Powered by Next.js</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
