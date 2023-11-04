import { queryBooks } from '../../api.utils';
import { BookData } from '../../models';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import BookCardList from '../../components/BookCardList/BookCardList';
import magnifyingGlassIcon from '/magnifying-glass-svgrepo-com.svg';

export const SearchResult = (props: {
  searchTerm: string;
  page: number;
  limit: number;
}) => {
  const [books, setBooks] = useState<BookData[]>([]);
  const { searchTerm: initialSearchTerm } = useParams<{ searchTerm: string }>();
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  useEffect(() => {
    queryBooks({
      searchTerm: props.searchTerm,
      currentPage: props.page,
      itemsPerPage: props.limit,
    }).then((result) => {
      setBooks(result.books);
    });
  }, [props.searchTerm, props.page, props.limit]);

  return (
    <div className="main-container-hight">
      <div className="flex justify-center p-4">
        <div className="input-bar relative w-96">
          <input
            className="border-2 border-gray-800 w-full p-1 pl-3 rounded-3xl text-xs mb-8 relative z-10"
            type="text"
            placeholder="Type the name of book..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to={!searchTerm ? '' : `/search/${searchTerm}`}>
            <img
              className="absolute right-2 top-1 z-10"
              src={magnifyingGlassIcon}
              alt="Magnifying glass icon"
            />
          </Link>
          <div className="input-shadow w-full p-1 pl-3 rounded-3xl text-xs mb-8 bg-yellow-500 h-5 absolute top-3"></div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="grow">
          <BookCardList
            books={books}
            searchTerm={props.searchTerm}
          ></BookCardList>
        </div>
        <div className="max-w-sm m-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
