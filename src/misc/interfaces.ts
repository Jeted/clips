import { Writable } from 'svelte/store';

export interface ICategory {
  categoryId: string;
  categoryName: string;
}

export interface IClipData {
  creator_name: string;
  game_id: string;
  title: string;
  view_count: string;
  created_at: string;
  thumbnail_url: string;
  url: string;
}

export interface IClip {
  author: string;
  title: string;
  views: number;
  date: number;
  thumbnail: string;
  download: string;
  url: string;
  categoryId?: string;
  category?: string;
}

export interface IForm {
  from_date: string;
  to_date: string;
  channel: string;
}

export interface IParams {
  broadcaster_id: string;
  first: number;
  started_at: string;
  ended_at: string;
  after?: string;
}

export interface ISorting {
  column: string;
  order: boolean;
}

export interface IStore {
  clips: IClip[];
  loading: boolean;
  sorting: ISorting;
  params: IParams;
}

export interface IToken {
  LOGIN_URL: string;
  USERNAME: Writable<string>;
  OAUTH: Writable<string>;
}

export interface IUser {
  userId: string;
  login: string;
  displayName: string;
  avatar: string;
}

export interface IValidate {
  clientId: string;
  userId: string;
}
