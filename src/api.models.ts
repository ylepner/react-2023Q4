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
  description?: Created;
  links: Link[];
  title: string;
  covers: number[];
  subject_places: string[];
  subjects?: string[];
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

export interface Author {
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

export interface AuthorResponse {
  birth_date: string;
  alternate_names: string[];
  personal_name: string;
  fuller_name: string;
  links: Link[];
  photos: number[];
  bio: string;
  entity_type: string;
  key: string;
  source_records: string[];
  title: string;
  type: Type;
  name: string;
  remote_ids: RemoteIDS;
  wikipedia: string;
  latest_revision: number;
  revision: number;
  created: Created;
  last_modified: Created;
}

export interface Link {
  title: string;
  url: string;
  type: Type;
}

export interface Type {
  key: string;
}

export interface RemoteIDS {
  viaf: string;
  goodreads: string;
  storygraph: string;
  isni: string;
  librarything: string;
  amazon: string;
  wikidata: string;
}
export interface EditionsResponse {
  links: Links;
  size: number;
  entries: Entry[];
}

export interface Entry {
  works: TypeElement[];
  title: string;
  publishers?: string[];
  publish_date?: string;
  key: string;
  type: TypeElement;
  identifiers?: Identifiers;
  covers?: number[];
  isbn_13?: string[];
  classifications?: Classifications;
  source_records?: string[];
  latest_revision: number;
  revision: number;
  created: Created;
  last_modified: Created;
  authors?: TypeElement[];
  languages?: TypeElement[];
  pagination?: string;
  full_title?: string;
  number_of_pages?: number;
  isbn_10?: string[];
  physical_format?: string;
  notes?: Created;
  weight?: string;
  local_id?: string[];
  subtitle?: string;
  publish_places?: string[];
  edition_name?: string;
  copyright_date?: string;
  ocaid?: string;
  series?: string[];
  oclc_numbers?: string[];
  description?: Created | string;
  table_of_contents?: TableOfContent[];
  other_titles?: string[];
  by_statement?: string;
  lc_classifications?: string[];
  subjects?: string[];
  contributions?: string[];
  work_titles?: string[];
  lccn?: string[];
  publish_country?: string;
  physical_dimensions?: string;
  subject_people?: string[];
}

export interface TypeElement {
  key: string;
}

export interface Classifications {}

export enum TypeEnum {
  TypeDatetime = '/type/datetime',
  TypeText = '/type/text',
}

export interface Identifiers {
  goodreads?: string[];
  amazon?: string[];
}

export interface TableOfContent {
  level: number;
  label: string;
  title: string;
  pagenum: string;
}

export interface Links {
  self: string;
  work: string;
  next: string;
}
