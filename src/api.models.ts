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

export interface BookDetails {
  description: string;
  title: string;
  covers: number[];
  first_sentence: Created;
  first_publish_date: string;
  key: string;
  authors: Author[];
  excerpts: Excerpt[];
  type: Type;
  subjects: string[];
  latest_revision: number;
  revision: number;
  created: Created;
  last_modified: Created;
}

export interface Author {
  author: Type;
  type: Type;
}

export interface Type {
  key: string;
}

export interface Created {
  type: string;
  value: string;
}

export interface Excerpt {
  excerpt: string;
}
