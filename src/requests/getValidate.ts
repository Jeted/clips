import axios from 'axios';

interface IValidate {
  clientId: string;
  userId: string;
}

export async function getValidate(): Promise<IValidate> {
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
