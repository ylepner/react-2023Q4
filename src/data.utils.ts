import { BookInfo } from './data';
import { BookData } from './models';

export function toBookInfo(data: BookInfo): BookData {
  const id = data.key.replace('/works/', '');
  return {
    id: id,
    title: data.title,
    coverId: data.cover_i?.toString(),
    authors: data.author_name,
  };
}

export function getBookImgUrl(data: BookData): string | undefined {
  if (data.coverId == null) return undefined;
  return getBookImgUrlByCoverId(data.coverId);
}

export function getBookImgUrlByCoverId(coverId: number | string) {
  return `https://covers.openlibrary.org/b/id/${coverId}.jpg`;
}
