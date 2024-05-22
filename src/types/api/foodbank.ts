type Shift = {
  begins: string | null;
  duration: string | null;
  openings: string | null;
};

type Qualification = {
  text: string | null;
};

type Details = {
  text: string | null;
};

export interface FoodBank {
  id: number;
  title?: string;
  excerpt: string | null;
  description: {
    description?: string | null;
    attire?: string | null;
    commitment?: string | null;
    safety?: string | null;
    parking?: string | null;
    hours?: string | null;
    lunch?: string | null;
    lobbyHours?: string | null;
    closure?: string | null;
  };
  shifts: Shift[];
  qualifications: Qualification[];
  details: Details[];
}
