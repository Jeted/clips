import axios from 'axios';
import { ICategory, IClip } from '../misc/interfaces';

export async function getCategories(clips: IClip[]): Promise<ICategory[] | null> {
  if (!clips.length) return null;

  const client_id = localStorage.getItem('tcf:client_id');
  const oauth = localStorage.getItem('tcf:oauth');
  const categories = clips.map((x) => x.categoryId).filter((item, index, arr) => arr.indexOf(item) === index);

  const url = new URL('https://api.twitch.tv/helix/games');
  Object.entries(categories).forEach(([key, value]) => {
    if (value) url.searchParams.append('id', value);
  });

  if (categories.length) {
    return axios(url.toString(), {
      headers: {
        Authorization: 'Bearer ' + oauth,
        'Client-Id': client_id,
      },
    }).then((result) => {
      const categories = result.data.data;
      return categories.map((category: { id: string; name: string }) => {
        return {
          categoryId: category.id,
          categoryName: category.name,
        };
      });
    });
  }

  return null;
}
