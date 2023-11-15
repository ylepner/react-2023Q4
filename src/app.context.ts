import { createContext, useContext } from 'react';
import { BookData, StoreState } from './models';
import { SearchState } from './models';
import { useSelector } from 'react-redux';

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
});

export function useStateFromContext(): SearchState {
  const searchState = useSelector((state: StoreState) => state.appState.search);
  return searchState;
  // return useContext(SearchContext);
}
