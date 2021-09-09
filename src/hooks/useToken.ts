import config from '../config';
import { get } from 'svelte/store';
import { IToken } from '../interfaces';
import { useLocalStorage } from './useLocalStorage';

export function useToken(): IToken {
  const LOGIN_URL = `https://id.twitch.tv/oauth2/authorize?client_id=${config.CLIENT_ID}&redirect_uri=${config.BASE_URL}&response_type=token`;

  const OAUTH = useLocalStorage('tcf:oauth');
  const USERNAME = useLocalStorage('tcf:username');
  const EXPIRATION_DATE = useLocalStorage('tcf:expires');

  if (get(OAUTH) && get(EXPIRATION_DATE)) {
    const currentDate = Number(Date.now());
    const expirationDate = Number(get(EXPIRATION_DATE));
    const difference = currentDate - expirationDate;
    const days = 14;

    if (difference > days * 24 * 3600000) {
      localStorage.clear();
    }
  }

  if (window.location.hash) {
    const regex = /(?<=access_token=)(.*?)(?=\&)/;
    const [match, token] = window.location.hash.match(regex) || [];
    if (match) {
      OAUTH.set(token);
      EXPIRATION_DATE.set(Date.now().toString());
      window.history.pushState({}, '', config.BASE_URL);
    }
  }

  return { LOGIN_URL, USERNAME, OAUTH };
}
