import { createContext, useContext } from 'react';
import { BookData } from './models';
import { SearchQueryParams } from './route.utils';

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

export function useStateFromContext(): SearchQueryParams {
  return useContext(SearchContext);
}
