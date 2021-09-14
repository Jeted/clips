import axios from 'axios';
import { Clip, ClipData } from '../misc/types';
import { getCategories } from './getCategories';

export async function getClips(url: URL): Promise<[Clip[], string]> {
  const client_id = localStorage.getItem('tcf:client_id');
  const oauth = localStorage.getItem('tcf:oauth');

  return axios(url.toString(), {
    headers: {
      Authorization: 'Bearer ' + oauth,
      'Client-Id': client_id,
    },
  }).then(async (result) => {
    const pagination = result.data.pagination.cursor;

    const data: Clip[] = result.data.data.map((clip: ClipData) => {
      return {
        author: clip.creator_name || '-',
        title: clip.title.trim(),
        views: clip.view_count.toString(),
        date: new Date(clip.created_at).getTime(),
        thumbnail: clip.thumbnail_url,
        download: clip.thumbnail_url.replace('-preview-480x272.jpg', '.mp4'),
        url: clip.url,
        categoryId: clip.game_id,
      };
    });

    const categories = await getCategories(data);

    const clips = data.map((clip: Clip) => {
      if (categories) {
        const [category] = categories.filter((x) => x.categoryId === clip.categoryId);
        return {
          ...clip,
          category: category?.categoryName || '-',
        };
      }
      return clip;
    });

    return [clips, pagination];
  });
}
