import { writable, get } from 'svelte/store';

export function useLocalStorage(key: string) {
  const local = localStorage.getItem(key);
  const store = writable(localStorage.getItem(key));
  const { subscribe, set } = store;

  if (local) set(local);

  return {
    set(value: string) {
      localStorage.setItem(key, value);
      set(value);
    },
    update(callback: any) {
      const value = callback(get(store));
      this.set(value);
    },
    subscribe,
  };
}
