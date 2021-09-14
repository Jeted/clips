import { sortClips } from '../helpers';
import { ORDER, COLUMN } from './enums';
import { get, writable, Writable } from 'svelte/store';
import { Clip, Filtering, Params, Sorting, Store } from './types';

const store: Store = {
  clips: [],
  loading: false,
  sorting: {
    column: COLUMN.VIEWS,
    order: !!ORDER.DESC,
  },
  params: null,
};

const clips: Writable<Clip[]> = writable(store.clips);
const loading: Writable<boolean> = writable(store.loading);
const params: Writable<Params> = writable(store.params);
const sorting: Writable<Sorting> = writable(store.sorting);

const handleSorting = (column: COLUMN) => {
  const values = get(sorting);
  sorting.set({
    column,
    order: column === values.column ? !values.order : values.order,
  });
  clips.update((values) => sortClips(values));
};

export { clips, loading, params, sorting, handleSorting };
