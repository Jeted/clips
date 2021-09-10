import { get } from 'svelte/store';
import { SORT } from '../misc/enums';
import { sorting } from '../misc/store';
import { IClip } from '../misc/interfaces';

export function sortClips(clips: IClip[]) {
  const { field, order } = get(sorting);
  return clips.sort((a: IClip, b: any) => {
    switch (field) {
      case SORT.TITLE:
        if (order) return a.title?.localeCompare(b.title);
        return b.title.localeCompare(a.title);
      case SORT.AUTHOR:
        if (order) return a.displayName?.localeCompare(b.displayName);
        return b.displayName.localeCompare(a.displayName);
      case SORT.CATEGORY:
        if (order) return a.category?.localeCompare(b.category);
        return b.category?.localeCompare(a.category);
      case SORT.VIEWS:
        if (order) return a.views - b.views;
        return b.views - a.views;
      case SORT.DATE:
        if (order) return a.createdAt - b.createdAt;
        return b.createdAt - a.createdAt;
      default:
        return b.views - a.views;
    }
  });
}
