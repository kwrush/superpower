export interface PowerStatsAPI {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export type Gender = 'Male' | 'Female';

export interface AppearanceAPI {
  gender: Gender;
  race: string;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
}

export interface BiographyAPI {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
}

export interface WorkAPI {
  occupation: string;
  base: string;
}

export interface ConnectionsAPI {
  groupAffiliation: string;
  relatives: string;
}

export interface ImagesAPI {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export interface HeroAPI {
  id: number;
  name: string;
  slug: string;
  powerstats: PowerStatsAPI;
  appearance: AppearanceAPI;
  biography: BiographyAPI;
  work: WorkAPI;
  connections: ConnectionsAPI;
  images: ImagesAPI;
}
