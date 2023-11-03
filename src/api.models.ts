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

export interface BookFullDetailsResponse {
  description: Created;
  links: Link[];
  title: string;
  covers: number[];
  subject_places: string[];
  subjects: string[];
  subject_people: string[];
  key: string;
  authors: Author[];
  excerpts: Excerpt[];
  type: Type;
  subject_times: string[];
  latest_revision: number;
  revision: number;
  created: Created;
  last_modified: Created;
}

interface Author {
  author: Type;
  type: Type;
}

interface Created {
  type: string;
  value: string;
}

interface Excerpt {
  excerpt: string;
  comment: string;
  author: Type;
  pages?: string;
}

export interface Link {
  url: string;
  title: string;
  type: Type;
}

export interface Type {
  key: string;
}
