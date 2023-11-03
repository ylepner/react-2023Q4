import { BookInfo, BooksResponse } from '../../api.models';
import BookCard from '../HomePage/components/BookCard/BookCard';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export const SearchResult = (props: {
  searchTerm: string;
  page: number;
  limit: number;
}) => {
  const [books, setBooks] = useState<BookInfo[]>([]);
  console.log(props);

  const getBooks = (searchTerm: string) => {
    const url = `http://openlibrary.org/search.json?q=${props.searchTerm}&page=${props.page}&limit=${props.limit}`;
    fetch(url)
      .then((response) => response.json())
      .then((data: BooksResponse) => {
        console.log(data);
        setBooks(
          data.docs.map((doc) => ({
            key: doc.key,
            title: doc.title,
            cover_i: doc.cover_i || undefined,
            author_name: doc.author_name || [],
          }))
        );
      });
  };

  return (
    <div className="flex flex-row">
      <div className="grow">
        {books.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            parentUrl={`/search/${props.searchTerm}`}
          />
        ))}
      </div>
      <div className="max-w-sm">
        <Outlet />
      </div>
    </div>
  );
};
