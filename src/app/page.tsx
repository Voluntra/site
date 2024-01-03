import features from "@/lib/feature-list";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import AppStore from "../../public/app_store.svg";
import GooglePlay from "../../public/google_play.png";

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center p-page overflow-hidden">
        <div className="flex justify-center align-middle items-center gap-1 select-none rounded-full border w-auto py-1 px-3 shadow-md border-neutral-800 backdrop-blur-sm backdrop-filter bg-neutral-900">
          <Sparkles className="h-4 w-4" />
          <p className="text-xs text-neutral-400">
            Developed by students, for students
          </p>
        </div>
        <h1 className="gradient-text select-none tracking-tight w-3/4 text-center text-7xl leading-none pb-2 font-semibold pt-5 text-neutral-100">
          Voluntra is a better way to{" "}
          <span className="gradient-accent">volunteer</span>
        </h1>
        <p className="text-neutral-500 select-none">
          Discover opportunities to volunteer in your community, track your
          hours, and integrate with Xello.
        </p>
        <div className="flex gap-4 relative items-center align-middle container justify-center">
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
        </div>
      </main>
      <div className="min-h-screen text-white text-center p-page" id="features">
        <div className="grid grid-cols-4 gap-4 auto-rows-fr">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="select-none p-5 flex flex-col aspect-square backdrop-blur-md bg-neutral-900 border border-neutral-800 rounded-md hover:border-neutral-600 ease-in duration-200 transition-all"
            >
              <div>
                <div className="flex align-middle items-center gap-1">
                  <div className="h-6 w-6">{feature.icon}</div>
                  <h3 className="font-bold">{feature.title}</h3>
                </div>
                <p className="text-neutral-500 text-sm text-left">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
