'use client';

import { Rocket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import GitHub from '../../public/github.png';
import Logo from '../app/icon.png';
import Button from './ui/button';
import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <footer className="bg-black pt-smPage sm:pt-page">
      <div className="p-smPage sm:px-page sm:py-0">
        <Separator
          orientation="horizontal"
          decorative
          className="h-px0 bg-neutral-900"
        />
      </div>
      <nav className="flex justify-between p-smPage pt-0 sm:p-page">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-evenly space-x-2 align-middle">
            <div className="flex items-center space-x-2 align-middle">
              <Image src={Logo} alt="Logo" className="h-7 w-7 opacity-75" />
              <p className="text-lg font-semibold text-neutral-400">Voluntra</p>
            </div>
            <Separator
              orientation="vertical"
              decorative
              className="h-6 bg-neutral-700"
            />
            <Button size="icon" className="h-8 w-8 opacity-70" variant="ghost">
              <Link
                href="https://github.com/Voluntra"
                className="p-[6px]"
                target="_blank"
              >
                <Image src={GitHub} alt="Github Logo" />
              </Link>
            </Button>
          </div>
          <p className="text-sm text-neutral-500">
            Copyright © Voluntra {new Date().getFullYear()}
          </p>
        </div>
        <div className="hidden items-center justify-center gap-2 align-middle text-neutral-500 sm:flex">
          <Rocket className="text-purple-400" />
          <p>Powered by Next.js and React</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
