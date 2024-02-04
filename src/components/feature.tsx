interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Feature = ({ description, icon, title }: FeatureProps) => {
  return (
    <div className="select-none p-5 flex flex-col aspect-square backdrop-blur-md bg-neutral-900 border border-neutral-800 rounded-md hover:border-neutral-600 ease-in duration-200 transition-all">
      <div>
        <div className="flex align-middle items-center gap-1">
          <div className="h-6 w-6">{icon}</div>
          <h3 className="font-bold">{title}</h3>
        </div>
        <p className="text-neutral-500 text-sm text-left">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
