import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BookSearchData, SearchState } from '../models';
import { getQueryUrl } from '../api.utils';
import { BooksResponse } from '../api.models';
import { toBookInfo } from '../data.utils';

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
      transformResponse: (responseBody: object) => {
        const data = responseBody as BooksResponse;
        const result: BookSearchData = {
          books: data.docs.map((el) => toBookInfo(el)),
          total: data.numFound,
        };
        return result;
      },
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
