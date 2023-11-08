import { createContext } from 'react';
import { BookData } from './models';

export interface AppContextState {
  searchTerm: string;
  bookList: BookData[];
}

export const AppContext = createContext<AppContextState>({
  searchTerm: '',
  bookList: [],
});
