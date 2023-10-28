export interface BooksResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: BookInfo[];
  num_found: number;
  q: string;
  offset: null;
}

export interface BookInfo {
  key: string;
  title: string;
  cover_i?: number;
  author_name: string[];
}
