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

export interface BookCard {
  id: string;
  title: string;
  cover: string;
  authors: string[];
}

interface CreatedInfo {
  type: string;
  value: string;
}

interface ModifiedInfo {
  type: string;
  value: string;
}

interface AuthorInfo {
  author: { key: string };
  type: { key: string };
}

interface CreatedInfo {
  type: string;
  value: string;
}

export interface BookCardResponseWorks {
  title: string;
  key: string;
  authors: AuthorInfo[];
  type: { key: string };
  description: string;
  covers: number[];
  subject_places: string[];
  subjects: string[];
  subject_people: string[];
  subject_times: string[];
  location: string;
  latest_revision: number;
  revision: number;
  created: CreatedInfo;
  last_modified: {
    type: string;
    value: string;
  };
}
export interface BookCardResponseBooks {
  type: { key: string };
  authors: { key: string }[];
  isbn_13: string[];
  languages: { key: string }[];
  pagination: string;
  publish_date: string;
  publishers: string[];
  source_records: string[];
  title: string;
  weight: string;
  full_title: string;
  works: { key: string }[];
  key: string;
  latest_revision: number;
  revision: number;
  created: CreatedInfo;
  last_modified: ModifiedInfo;
}
