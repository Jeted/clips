import axios from 'axios';
import { getCategories } from './getCategories';
import { IClip, IClipData } from '../misc/interfaces';

export async function getClips(url: URL): Promise<[IClip[], string]> {
  const client_id = localStorage.getItem('tcf:client_id');
  const oauth = localStorage.getItem('tcf:oauth');

  return axios(url.toString(), {
    headers: {
      Authorization: 'Bearer ' + oauth,
      'Client-Id': client_id,
    },
  }).then(async (result) => {
    const pagination = result.data.pagination.cursor;

    const data: IClip[] = result.data.data.map((clip: IClipData) => {
      return {
        displayName: clip.creator_name || '-',
        title: clip.title.trim(),
        views: clip.view_count,
        createdAt: new Date(clip.created_at).getTime(),
        thumbnail: clip.thumbnail_url,
        download: clip.thumbnail_url.replace('-preview-480x272.jpg', '.mp4'),
        url: clip.url,
        categoryId: clip.game_id,
      };
    });

    const categories = await getCategories(data);

    const clips = data.map((clip: IClip) => {
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
