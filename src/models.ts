export interface BookData {
  id: string;
  title: string;
  coverId?: string;
  authors: string[];
}

export interface BookSearchData {
  books: BookData[];
  total: number;
}

export interface QueryStateProps {
  searchTerm: string;
  page: number;
  limit: number;
}
