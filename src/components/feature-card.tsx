import Feature from "@/types/features";
import Image from "next/image";

const Feature = ({ description, icon, title, image }: Feature) => {
  return (
    <div className="select-none p-5 flex flex-col justify-between aspect-square backdrop-blur-md bg-radial-gradient border border-neutral-700 rounded-md sm:hover:border-neutral-600 ease-in duration-200 transition-all">
      <div className="flex justify-center items-center flex-grow">
        <Image src={image} alt="Monthly Goal UI" />
      </div>
      <div className="mt-auto">
        <div className="flex align-middle items-center gap-1">
          <div className="h-6 w-6">{icon}</div>
          <h3 className="font-bold sm:text-sm md:text-md lg:text-base">
            {title}
          </h3>
        </div>
        <p className="text-neutral-500 text-sm text-left">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
