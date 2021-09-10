import { ORDER, SORT } from './enums';
import { writable, Writable } from 'svelte/store';
import { IClip, IParams, ISorting, IStore } from './interfaces';

const Store: IStore = {
  clips: [],
  loading: false,
  sorting: {
    field: SORT.VIEWS,
    order: !!ORDER.DESC,
  },
  params: null,
};

const clips: Writable<IClip[]> = writable(Store.clips);
const loading: Writable<boolean> = writable(Store.loading);
const params: Writable<IParams> = writable(Store.params);
const sorting: Writable<ISorting> = writable(Store.sorting);

export { clips, loading, params, sorting };
