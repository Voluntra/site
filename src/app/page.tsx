"use client";

import Feature from "@/components/feature-card";
import features from "@/lib/feature-list";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import AppStore from "../../public/app-store.svg";
import GooglePlay from "../../public/google-play.png";

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center p-smPage sm:p-page overflow-hidden">
        <section className="flex justify-center align-middle items-center gap-1 select-none rounded-full border w-auto py-1 px-3 shadow-md border-neutral-800 backdrop-blur-sm backdrop-filter bg-neutral-900">
          <Sparkles className="h-4 w-4 text-purple-100" />
          <p className="text-xs text-neutral-400">
            Developed by students, for students
          </p>
        </section>
        <h1 className="gradient-text select-none tracking-tight w-full sm:w-3/4 text-center text-5xl md:text-7xl leading-none pb-2 font-semibold pt-5 text-neutral-100">
          Voluntra is a better way to{" "}
          <span className="gradient-accent">volunteer</span>
        </h1>
        <p className="text-neutral-500 select-none text-xs sm:text-base">
          Discover opportunities to volunteer in your community, track your
          hours, and integrate with Xello.
        </p>
        <section
          className="flex gap-4 relative items-center align-middle container justify-center"
          id="downloads"
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
            height={150}
            className="cursor-pointer pt-5"
          />
        </section>
      </main>
      <section
        className="min-h-screen text-white text-center p-smPage sm:p-page pb-0"
        id="features"
      >
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 auto-rows-fr grid-auto-rows:min-content">
          {features.map(({ description, icon, title, image }) => (
            <Feature
              description={description}
              icon={icon}
              title={title}
              image={image}
              key={title}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
