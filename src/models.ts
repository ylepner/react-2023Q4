export interface BookData {
  id: string;
  title: string;
  coverId?: string;
  authors?: string[];
}

export interface BookSearchData {
  books: BookData[];
  total: number;
}

export interface SearchState {
  searchTerm: string;
  page: number;
  itemsPerPage: number;
  bookId?: string;
}

export interface StoreState {
  appState: AppState;
}

export interface AppState {
  search: SearchState;
  selectedBookId?: string;
  searchResult?: BookSearchData;
}
