import { queryBooks } from '../../api.utils';
import { BookData } from '../../models';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import BookCardList from '../../components/BookCardList/BookCardList';

export const SearchResult = (props: {
  searchTerm: string;
  page: number;
  limit: number;
}) => {
  const [books, setBooks] = useState<BookData[]>([]);
  console.log(props);

  useEffect(() => {
    queryBooks({
      searchTerm: props.searchTerm,
      currentPage: props.page,
      itemsPerPage: props.limit,
    }).then((result) => {
      console.log('Result of query', result);
      setBooks(result.books);
    });
  }, [props.searchTerm, props.page, props.limit]);

  return (
    <div className="flex flex-row">
      <div className="grow">
        <BookCardList
          books={books}
          searchTerm={props.searchTerm}
        ></BookCardList>
      </div>
      <div className="max-w-sm">
        <Outlet />
      </div>
    </div>
  );
};
