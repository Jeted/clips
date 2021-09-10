import { writable, Writable } from 'svelte/store';
import { IClip, IParams, IStore } from './interfaces';

const Store: IStore = {
  clips: [],
  loading: false,
  params: null,
};

const clips: Writable<IClip[]> = writable(Store.clips);
const loading: Writable<boolean> = writable(Store.loading);
const params: Writable<IParams> = writable(Store.params);

export { clips, loading, params };
