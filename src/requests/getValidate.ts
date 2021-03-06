import axios from 'axios';
import { Validate } from '../misc/types';

export async function getValidate(): Promise<Validate> {
  const oauth = localStorage.getItem('tcf:oauth');
  return axios('https://id.twitch.tv/oauth2/validate', {
    headers: {
      Authorization: 'Bearer ' + oauth,
    },
  }).then((result) => {
    const channel = result.data;
    return {
      clientId: channel.client_id,
      userId: channel.user_id,
    };
  });
}
