import { BooksResponse } from './api.models';
import { toBookInfo } from './data.utils';
import { BookSearchData } from './models';

export function getQueryUrl(
  searchTerm: string,
  currentPage: number,
  itemsPerPage: number = 10
) {
  const offset = currentPage * itemsPerPage;
  if (searchTerm) {
    return `https://openlibrary.org/search.json?q=${searchTerm}&_spellcheck_count=0&limit=${itemsPerPage}&offset=${offset}&fields=key,cover_i,title,subtitle,author_name,name&mode=everything`;
  } else {
    return `https://openlibrary.org/search.json?q='all'&offset=${offset}&_spellcheck_count=0&limit=10&fields=key,cover_i,title,subtitle,author_name,name&mode=everything`;
  }
}
async function wait(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
export async function queryBooks(request: {
  searchTerm: string;
  currentPage?: number;
  itemsPerPage?: number;
}): Promise<BookSearchData> {
  const response = await fetch(
    getQueryUrl(
      request.searchTerm,
      request.currentPage ?? 0,
      request.itemsPerPage ?? 10
    )
  );
  const responseBody: BooksResponse = await response.json();
  const result: BookSearchData = {
    books: responseBody.docs.map((el) => toBookInfo(el)),
    total: responseBody.numFound,
  };

  return result;
}
