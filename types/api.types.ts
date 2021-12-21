export interface PowerStatsAPI {
  readonly intelligence: string;
  readonly strength: string;
  readonly speed: string;
  readonly durability: string;
  readonly power: string;
  readonly combat: string;
}

export type Gender = 'Male' | 'Female';

export type Alignment = 'good' | 'bad' | 'neutral';

export interface AppearanceAPI {
  readonly gender: Gender;
  readonly race: string;
  readonly height: string[];
  readonly weight: string[];
  readonly 'eye-color': string;
  readonly 'hair-color': string;
}

export interface BiographyAPI {
  readonly 'full-name': string;
  readonly 'alter-egos': string;
  readonly aliases: string[];
  readonly 'place-of-birth': string;
  readonly 'first-appearance': string;
  readonly publisher: string;
  readonly alignment: Alignment;
}

export interface WorkAPI {
  readonly occupation: string;
  readonly base: string;
}

export interface ConnectionsAPI {
  readonly 'group-affiliation': string;
  readonly relatives: string;
}

export interface ImageAPI {
  readonly url: string;
}

export interface HeroAPI {
  readonly response: 'success';
  readonly id: string;
  readonly name: string;
  readonly powerstats: PowerStatsAPI;
  readonly appearance: AppearanceAPI;
  readonly biography: BiographyAPI;
  readonly work: WorkAPI;
  readonly connections: ConnectionsAPI;
  readonly image: ImageAPI;
}

export interface SearchNameAPI {
  readonly response: 'success';
  readonly 'results-for': string;
  readonly results: HeroAPI[];
}

export interface ErrorAPI {
  readonly response: 'error';
  readonly error: string;
}
