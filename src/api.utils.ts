import { BooksResponse } from './api.models';

export function getQueryUrl(
  searchTerm: string,
  currentPage: number,
  itemsPerPage: number = 10
) {
  if (searchTerm) {
    return `https://openlibrary.org/search.json?q=${searchTerm}&_spellcheck_count=0&limit=${itemsPerPage}&page=${currentPage}&fields=key,cover_i,title,subtitle,author_name,name&mode=everything`;
  } else {
    return `https://openlibrary.org/search.json?q='all'&page=${currentPage}&_spellcheck_count=0&limit=10&fields=key,cover_i,title,subtitle,author_name,name&mode=everything`;
  }
}

export async function queryBooksRequest(request: {
  searchTerm: string;
  currentPage?: number;
  itemsPerPage?: number;
}): Promise<BooksResponse> {
  const response = await fetch(
    getQueryUrl(
      request.searchTerm,
      request.currentPage ?? 0,
      request.itemsPerPage ?? 10
    )
  );
  const result = response.json();
  return result;
}
