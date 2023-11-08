import { createContext } from 'react';
import { BookData } from './models';

export interface SearchTermContextState {
  searchTerm: string;
}

export interface BookListContextState {
  bookList: BookData[];
}

export const BookListContext = createContext<BookListContextState>({
  bookList: [],
});

export const SearchTermContext = createContext<SearchTermContextState>({
  searchTerm: '',
});
