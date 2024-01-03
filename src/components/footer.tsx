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
    <div className="p-page flex justify-between">
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
          Copyright © {new Date().getFullYear()} Voluntra
        </p>
      </div>
      <div className="flex gap-2 items-center justify-center align-middle text-neutral-500">
        <Rocket className="fill-purple-400 stroke-800 stroke-1" />
        <p>Powered by React Native</p>
      </div>
    </div>
  );
};

export default Footer;
