import { HeroAPI } from './api.types';

export type HeroEntity = Record<number, HeroAPI>;

export type Hero = Omit<HeroAPI, 'response'>;
