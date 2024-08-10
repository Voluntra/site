'use client';

import siteConfig from '@/config/site';
import { Variants, motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import AppStore from '../../public/app-store.svg';
import GooglePlay from '../../public/google-play.png';

const Home = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: -5 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.main
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-smPage antialiased bg-grid-black/[0.2] dark:bg-grid-neutral-800 sm:p-page"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="flex w-full flex-col items-center justify-center xl:container xl:mx-auto">
        {/* Background Gradient */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"
          variants={item}
          initial="hidden"
          animate="show"
        />

        {/* Tagline Tooltip */}
        <motion.section
          className="flex w-auto items-center justify-center gap-1 rounded-full border border-border bg-gradient-to-b from-neutral-700 to-neutral-900 px-3 py-1 align-middle shadow-md backdrop-blur-sm backdrop-filter"
          variants={item}
          style={{ willChange: 'transform, opacity' }}
        >
          <Sparkles className="size-4 text-accent-foreground xl:size-6" />
          <p className="text-xs font-medium text-muted-foreground md:text-sm xl:text-xl">
            {siteConfig.home.tagline}
          </p>
        </motion.section>

        {/* Hero Title */}
        <motion.h1
          className="gradient-text w-full pb-2 pt-5 text-center text-5xl font-semibold leading-none tracking-tighter sm:tracking-tight md:text-7xl xl:text-9xl"
          variants={item}
          style={{ willChange: 'transform, opacity' }}
        >
          {siteConfig.home.header.title}{' '}
          <span className="gradient-accent inline-block">
            {siteConfig.home.header.accent}
          </span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          className="text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-center text-xs sm:text-sm md:text-base xl:text-2xl"
          variants={item}
          style={{ willChange: 'transform, opacity' }}
        >
          {siteConfig.home.description}
        </motion.p>

        {/* Download Images */}
        <motion.section
          className="relative flex select-none items-center justify-center gap-4 align-middle lg:gap-8"
          id="downloads"
          variants={item}
          style={{ willChange: 'transform, opacity' }}
        >
          <Image
            alt="Download on App Store"
            src={AppStore}
            className="cursor-pointer pt-5 lg:scale-125"
          />
          <Image
            alt="Download on Google Play"
            src={GooglePlay}
            width={150}
            className="cursor-pointer pt-5 lg:scale-125"
          />
        </motion.section>
      </div>
    </motion.main>
  );
};

export default Home;
