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
  displayName: string;
  title: string;
  views: number;
  createdAt: number;
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

export interface IStore {
  clips: IClip[];
  loading: boolean;
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
