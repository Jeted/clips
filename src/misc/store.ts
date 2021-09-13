import { sortClips } from '../helpers';
import { ORDER, COLUMN } from './enums';
import { get, writable, Writable } from 'svelte/store';
import { IClip, IParams, ISorting, IStore } from './interfaces';

const Store: IStore = {
  clips: [],
  loading: false,
  sorting: {
    column: COLUMN.VIEWS,
    order: !!ORDER.DESC,
  },
  params: null,
};

const clips: Writable<IClip[]> = writable(Store.clips);
const loading: Writable<boolean> = writable(Store.loading);
const params: Writable<IParams> = writable(Store.params);
const sorting: Writable<ISorting> = writable(Store.sorting);

const handleSorting = (column: COLUMN) => {
  const values = get(sorting);
  sorting.set({
    column,
    order: column === values.column ? !values.order : values.order,
  });
  clips.update((values) => sortClips(values));
};

export { clips, loading, params, sorting, handleSorting };
