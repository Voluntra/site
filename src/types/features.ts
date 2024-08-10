import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ReactNode } from 'react';

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
  image: StaticImport;
};

export default Feature;
