import Feature from "@/types/features";
import { ArrowRight } from "lucide-react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";

// TODO: add images to these feature cards
// The capability for images to be displayed in these feature cards exists
// but because the design is not finished they cannot be displayed yet
const Feature = ({ description, title, image }: Feature) => {
  return (
    <div className="flex items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>{title}</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>{description}</GlowingStarsDescription>
          <div className="size-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center cursor-pointer">
            <ArrowRight />
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
};

export default Feature;
