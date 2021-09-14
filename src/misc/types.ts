import { Writable } from 'svelte/store';

export type Category = {
  categoryId: string;
  categoryName: string;
};

export type ClipData = {
  creator_name: string;
  game_id: string;
  title: string;
  view_count: string;
  created_at: string;
  thumbnail_url: string;
  url: string;
};

export type Clip = {
  author: string;
  title: string;
  views: number;
  date: number;
  thumbnail: string;
  download: string;
  url: string;
  categoryId?: string;
  category?: string;
};
export type Form = {
  from_date: string;
  to_date: string;
  channel: string;
};

export type Params = {
  broadcaster_id: string;
  first: number;
  started_at: string;
  ended_at: string;
  after?: string;
};

export type Sorting = {
  column: string;
  order: boolean;
};

export type Store = {
  clips: Clip[];
  loading: boolean;
  sorting: Sorting;
  params: Params;
};

export type Token = {
  LOGIN_URL: string;
  USERNAME: Writable<string>;
  OAUTH: Writable<string>;
};

export type User = {
  userId: string;
  login: string;
  displayName: string;
  avatar: string;
};

export type Validate = {
  clientId: string;
  userId: string;
};
