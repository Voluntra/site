"use client";

import FeatureCard from "@/components/feature-card";
import features from "@/config/feature-list";
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
    <>
      <motion.main
        className="flex flex-col items-center p-smPage sm:p-page overflow-hidden antialiased"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.section
          className="flex justify-center align-middle items-center gap-1 select-none rounded-full border w-auto py-1 px-3 shadow-md border-neutral-800 backdrop-blur-sm backdrop-filter bg-neutral-900"
          variants={item}
          style={{ willChange: "transform, opacity" }}
        >
          <Sparkles className="h-4 w-4 text-purple-100" />
          <p className="text-xs text-neutral-400">{siteConfig.home.aside}</p>
        </motion.section>
        <motion.h1
          className="gradient-text select-none tracking-tight w-full sm:w-3/4 text-center text-5xl md:text-7xl leading-none pb-2 font-semibold pt-5 text-neutral-100"
          variants={item}
          style={{ willChange: "transform, opacity" }}
        >
          {siteConfig.home.header.title}{" "}
          <span className="gradient-accent">
            {siteConfig.home.header.accent}
          </span>
        </motion.h1>
        <motion.p
          className="text-neutral-500 select-none text-xs"
          variants={item}
          style={{ willChange: "transform, opacity" }}
        >
          {siteConfig.home.description}
        </motion.p>
        <motion.section
          className="flex gap-4 relative items-center align-middle container justify-center"
          id="downloads"
          variants={item}
          style={{ willChange: "transform, opacity" }}
        >
          <Image
            alt="Download on App Store"
            src={AppStore}
            className="cursor-pointer pt-5"
          />
          <Image
            alt="Download on Google Play"
            src={GooglePlay}
            width={150}
            className="cursor-pointer pt-5"
          />
        </motion.section>
      </motion.main>
      <section
        className="min-h-screen text-white text-center p-smPage sm:p-page pb-0"
        id="features"
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-fr"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {features.map(({ description, icon, title, image }) => (
            <motion.div
              variants={item}
              style={{ willChange: "transform, opacity" }}
              key={title}
            >
              <FeatureCard
                description={description}
                icon={icon}
                title={title}
                image={image}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Home;
