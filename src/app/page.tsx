import Image from "next/image";
import AppStore from "../../public/app_store.svg";
import GooglePlay from "../../public/google_play.png";

const Home = () => {
  return (
    <main className="flex flex-col items-center p-page overflow-hidden">
      <div className="select-none rounded-full border w-auto py-1 px-3 shadow-md border-neutral-800 backdrop-blur-sm backdrop-filter bg-neutral-900">
        <p className="text-xs gradient-text">
          Developed by students, for students
        </p>
      </div>
      <h1 className="gradient-text select-none tracking-tight w-3/4 text-center text-7xl leading-none pb-2 font-semibold pt-5">
        Voluntra is a better way to volunteer
      </h1>
      <p className="text-neutral-500 select-none">
        Discover opportunities to volunteer in your community, track your hours,
        and integrate with Xello.
      </p>
      <div className="flex gap-4 relative items-center align-middle container justify-center">
        <Image
          alt="Download on Apple App Store"
          src={AppStore}
          className="cursor-pointer pt-5"
        />
        <Image
          alt="Download on Google Play Store"
          src={GooglePlay}
          width={150}
          className="cursor-pointer pt-5"
        />
      </div>
    </main>
  );
};

export default Home;
