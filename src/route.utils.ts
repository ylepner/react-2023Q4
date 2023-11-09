import { useMemo } from 'react';
import { useParams, useLocation } from 'react-router';

export interface SearchQueryParams {
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
  if (bookId) {
    return `/search/${searchTerm}/details/${bookId}?${PAGE_PARAM_NAME}=${page}&${COUNT_PARAM_NAME}=${itemsPerPage}`;
  }

  return `/search/${searchTerm}?${PAGE_PARAM_NAME}=${page}&${COUNT_PARAM_NAME}=${itemsPerPage}`;
}

export function useStateFromQuery(): SearchQueryParams {
  const { searchTerm, id } = useParams();
  const query = useQuery();
  const page = parseInt(query.get(PAGE_PARAM_NAME) || '0');
  const limit = parseInt(query.get(COUNT_PARAM_NAME) || '10');
  return {
    itemsPerPage: limit,
    page: page,
    searchTerm: searchTerm ?? '',
    bookId: id,
  };
}

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}
