import Feature from "@/components/feature";
import features from "@/lib/feature-list";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import AppStore from "../../public/app_store.svg";
import GooglePlay from "../../public/google_play.png";

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center p-8 sm:p-page overflow-hidden">
        <div className="flex justify-center align-middle items-center gap-1 select-none rounded-full border w-auto py-1 px-3 shadow-md border-neutral-800 backdrop-blur-sm backdrop-filter bg-neutral-900">
          <Sparkles className="h-4 w-4 fill-purple-400 text-neutral-400" />
          <p className="text-xs text-neutral-400">
            Developed by students, for students
          </p>
        </div>
        <h1 className="gradient-text select-none tracking-tight w-full sm:w-3/4 text-center text-5xl md:text-7xl leading-none pb-2 font-semibold pt-5 text-neutral-100">
          Voluntra is a better way to{" "}
          <span className="gradient-accent">volunteer</span>
        </h1>
        <p className="text-neutral-500 select-none text-xs">
          Discover opportunities to volunteer in your community, track your
          hours, and integrate with Xello.
        </p>
        <div
          className="flex gap-4 relative items-center align-middle container justify-center"
          id="downloads"
        >
          <Image
            alt="Download on App Store"
            src={AppStore}
            width={150}
            className="cursor-pointer pt-5"
          />
          <Image
            alt="Download on Google Play"
            src={GooglePlay}
            width={150}
            className="cursor-pointer pt-5"
          />
        </div>
      </main>
      <div
        className="min-h-screen text-white text-center p-8 sm:p-page"
        id="features"
      >
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 auto-rows-fr">
          {features.map(({ description, icon, title }) => (
            <Feature
              description={description}
              icon={icon}
              title={title}
              key={title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
