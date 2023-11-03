import { Outlet } from 'react-router-dom';
import { BookInfo } from '../HomePage/components/BookCard/models';
import BookCard from '../HomePage/components/BookCard/BookCard';
import { useState } from 'react';

export const SearchResult = (props: {
  searchTerm: string;
  page: number;
  take: number;
}) => {
  const [books, setBooks] = useState<BookInfo[]>([]);
  console.log(props);
  // get books from API
  return (
    <div className="flex flex-row">
      <div className="grow">
        {books.map((book) => (
          <BookCard key={book.key} book={book} parentUrl={`/search/${props.searchTerm}`} />
        ))}
      </div>
      <div className="max-w-sm">
        <Outlet />
      </div>
    </div>
  );
};
