interface SearchQueryParams {
  searchTerm: string;
  page: number;
  itemsPerPage: number;
  bookId?: string;
}
export const COUNT_PARAM_NAME = 'count';
export const PAGE_PARAM_NAME = 'page';

export function getSearchQueryUrl({
  searchTerm,
  page,
  itemsPerPage,
  bookId,
}: SearchQueryParams) {
  searchTerm = searchTerm.trim();
  // search/Harry potter?page=3&count=10
  // search/Harry potter/details/123?page=3&count=10
  if (bookId) {
    return `/search/${searchTerm}/details/${bookId}?${PAGE_PARAM_NAME}=${page}&${COUNT_PARAM_NAME}=${itemsPerPage}`;
  }

  return `/search/${searchTerm}?${PAGE_PARAM_NAME}=${page}&${COUNT_PARAM_NAME}=${itemsPerPage}`;
}
