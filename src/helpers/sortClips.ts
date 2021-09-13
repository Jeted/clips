import { get } from 'svelte/store';
import { COLUMN } from '../misc/enums';
import { sorting } from '../misc/store';
import { IClip } from '../misc/interfaces';

export function sortClips(clips: IClip[]) {
  const { column, order } = get(sorting);
  return clips.sort((a: IClip, b: any) => {
    switch (column) {
      case COLUMN.TITLE:
        if (order) return a.title?.localeCompare(b.title);
        return b.title.localeCompare(a.title);
      case COLUMN.AUTHOR:
        if (order) return a.author?.localeCompare(b.author);
        return b.author.localeCompare(a.author);
      case COLUMN.CATEGORY:
        if (order) return a.category?.localeCompare(b.category);
        return b.category?.localeCompare(a.category);
      case COLUMN.VIEWS:
        if (order) return a.views - b.views;
        return b.views - a.views;
      case COLUMN.DATE:
        if (order) return a.date - b.date;
        return b.date - a.date;
      default:
        return b.views - a.views;
    }
  });
}
