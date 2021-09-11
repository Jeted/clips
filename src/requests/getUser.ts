import axios from 'axios';
import { IUser } from '../misc/interfaces';

export async function getUser(channel: string, isLogin: boolean): Promise<IUser> {
  const client_id = localStorage.getItem('tcf:client_id');
  const oauth = localStorage.getItem('tcf:oauth');

  const query = new URL('https://api.twitch.tv/helix/users');
  query.searchParams.append(isLogin ? 'login' : 'id', channel);

  return axios(query.toString(), {
    headers: {
      Authorization: 'Bearer ' + oauth,
      'Client-Id': client_id,
    },
  }).then((result) => {
    const user = result.data.data[0];
    if (!user) throw new Error();
    return {
      userId: user.id,
      login: user.login,
      displayName: user.display_name,
      avatar: user.profile_image_url,
    };
  });
}
