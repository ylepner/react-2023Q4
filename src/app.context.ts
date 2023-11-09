import { createContext, useMemo } from 'react';
import { BookData } from './models';
import { useLocation, useParams } from 'react-router-dom';
import {
  SearchQueryParams,
  PAGE_PARAM_NAME,
  COUNT_PARAM_NAME,
} from './route.utils';

export interface SearchContextState {
  itemsPerPage: number;
  page: number;
  searchTerm: string;
  bookId?: string;
}

export interface BookListContextState {
  bookList: BookData[];
}

export const BookListContext = createContext<BookListContextState>({
  bookList: [],
});

export const SearchContext = createContext<SearchContextState>({
  itemsPerPage: 10,
  page: 0,
  searchTerm: '',
  bookId: undefined,
});

export function UseStateFromContext(): SearchQueryParams {
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
