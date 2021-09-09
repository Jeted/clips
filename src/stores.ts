import { IClip, IParams } from './interfaces';
import { writable, Writable } from 'svelte/store';

export const clips: Writable<IClip[]> = writable([]);
export const loading: Writable<boolean> = writable(false);
export const params: Writable<IParams> = writable(null);
