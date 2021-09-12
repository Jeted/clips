import { ORDER, SORT } from './enums';
import { sortClips } from '../helpers';
import { get, writable, Writable } from 'svelte/store';
import { ICache, IClip, IParams, ISorting, IStore } from './interfaces';

const Store: IStore = {
  cache: {
    thumbnails: [],
  },
  clips: [],
  loading: false,
  sorting: {
    field: SORT.VIEWS,
    order: !!ORDER.DESC,
  },
  params: null,
};

const cache: Writable<ICache> = writable(Store.cache);
const clips: Writable<IClip[]> = writable(Store.clips);
const loading: Writable<boolean> = writable(Store.loading);
const params: Writable<IParams> = writable(Store.params);
const sorting: Writable<ISorting> = writable(Store.sorting);

const handleCache = (group: string, value: any) => {
  if (get(cache)[group].includes(value)) return;
  get(cache)[group].push(value);
};

const handleSorting = (title: SORT) => {
  const values = get(sorting);
  sorting.set({
    field: title,
    order: title === values.field ? !values.order : values.order,
  });
  clips.update((values) => sortClips(values));
};

export { cache, clips, loading, params, sorting, handleCache, handleSorting };
