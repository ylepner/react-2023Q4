import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BookSearchData, SearchState } from '../models';
import { getQueryUrl } from '../api.utils';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getBooks: builder.query<BookSearchData, SearchState>({
      query: (searchState) => {
        return getQueryUrl(
          searchState.searchTerm,
          searchState.page,
          searchState.itemsPerPage
        );
      },
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
