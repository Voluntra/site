import Feature from "@/types/features";
import MonthlyGoal from "../../public/monthly-goal.svg";
import { icons } from "../lib/icons";

const features: Feature[] = [
  {
    title: "Discover",
    description: "Discover opportunities to volunteer in your community",
    icon: icons.discover,
    image: MonthlyGoal,
  },
  {
    title: "Hour Tracking",
    description: "Intelligently track your volunteer hours",
    icon: icons.hourglass,
    image: MonthlyGoal,
  },
  {
    title: "Integrations",
    description: "Effortlessly update your Xello profile with your hours",
    icon: icons.bear,
    image: MonthlyGoal,
  },
];

export default features;
