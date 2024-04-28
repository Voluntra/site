"use client";

import siteConfig from "@/config/site";
import { Variants, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import AppStore from "../../public/app-store.svg";
import GooglePlay from "../../public/google-play.png";

const Home = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
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
      className="min-h-screen flex-col p-smPage sm:p-page overflow-hidden antialiased w-full dark:bg-grid-neutral-800 bg-grid-black/[0.2] relative flex items-center justify-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        variants={item}
        initial="hidden"
        animate="show"
      />

      {/* Tagline Tooltip */}
      <motion.section
        className="flex justify-center align-middle items-center gap-1 rounded-full border w-auto py-1 px-3 shadow-md border-neutral-800 backdrop-blur-sm backdrop-filter bg-gradient-to-b from-neutral-800 to-neutral-900"
        variants={item}
        style={{ willChange: "transform, opacity" }}
      >
        <Sparkles className="h-4 w-4 text-purple-100" />
        <p className="text-xs md:text-sm 2xl:text-lg text-neutral-400">
          {siteConfig.home.tagline}
        </p>
      </motion.section>

      {/* Hero Title */}
      <motion.h1
        className="gradient-text tracking-tight w-full sm:w-3/4 text-center text-5xl md:text-7xl 2xl:text-9xl leading-none pb-2 font-semibold pt-5"
        variants={item}
        style={{ willChange: "transform, opacity" }}
      >
        {siteConfig.home.header.title}{" "}
        <span className="gradient-accent">{siteConfig.home.header.accent}</span>
      </motion.h1>

      {/* Hero Description */}
      <motion.p
        className="text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-xs sm:text-sm md:text-base 2xl:text-xl"
        variants={item}
        style={{ willChange: "transform, opacity" }}
      >
        {siteConfig.home.description}
      </motion.p>

      {/* Download Images */}
      <motion.section
        className="flex gap-4 lg:gap-8 relative items-center align-middle container justify-center"
        id="downloads"
        variants={item}
        style={{ willChange: "transform, opacity" }}
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

      {/* Features Section */}
    </motion.main>
  );
};

export default Home;
