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

export interface BookCard {
  title: string;
  authors: { key: string }[];
  description: string;
  cover: string;
  subjects: string[];
  publish_date: string;
  pagination: string;
}
