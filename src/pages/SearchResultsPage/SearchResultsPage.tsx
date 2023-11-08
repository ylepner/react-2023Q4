import { queryBooks } from '../../api.utils';
import { BookSearchData } from '../../models';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import BookCardList from '../../components/BookCardList/BookCardList';
import magnifyingGlassIcon from '/magnifying-glass-svgrepo-com.svg';
import Paginator from '../../components/Paginator/Paginator';
import { AppLink } from '../../components/AppLink';
import { useStateFromQuery } from '../../route.utils';
import { AppContext } from '../../app.context';

export const SearchResult = (props: {
  searchTerm: string;
  page: number;
  limit: number;
}) => {
  const [data, setData] = useState<BookSearchData | null>(null);
  const { searchTerm: initialSearchTerm } = useParams<{ searchTerm: string }>();
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [error, setError] = useState(false);
  const queryParams = useStateFromQuery();

  useEffect(() => {
    setData(null);
    const fetchBooks = async () => {
      try {
        const result = await queryBooks({
          searchTerm: props.searchTerm,
          currentPage: props.page,
          itemsPerPage: props.limit,
        });
        setData(result);
      } catch (error) {
        setError(true);
      }
    };
    fetchBooks();
  }, [props.searchTerm, props.page, props.limit]);

  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  const mainRender = () => {
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
            {searchTerm?.trim() && (
              <AppLink
                queryParams={{
                  ...queryParams,
                  bookId: undefined,
                  page: 0,
                  searchTerm: searchTerm,
                }}
              >
                <img
                  className="absolute right-2 top-1 z-10"
                  src={magnifyingGlassIcon}
                  alt="Magnifying glass icon"
                />
              </AppLink>
            )}
            <div className="input-shadow w-full p-1 pl-3 rounded-3xl text-xs mb-8 bg-yellow-500 h-5 absolute top-3"></div>
          </div>
        </div>
        {data ? (
          <>
            <div className="flex flex-row">
              <div className="grow">
                <AppContext.Provider
                  value={{ bookList: data.books, searchTerm: searchTerm ?? '' }}
                >
                  <BookCardList></BookCardList>
                </AppContext.Provider>
              </div>
              <div className="max-w-sm m-1">
                <Outlet />
              </div>
            </div>
            <Paginator total={data.total}></Paginator>
          </>
        ) : (
          <div className="text-center">Loading...</div>
        )}
      </div>
    );
  };

  return (
    <div className="main-container-hight flex justify-center items-center">
      {error ? 'Internal Service Error' : mainRender()}
    </div>
  );
};
