import { queryBooks } from '../../api.utils';
import { AppState, BookSearchData } from '../../models';
import { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import BookCardList from '../../components/BookCardList/BookCardList';
import magnifyingGlassIcon from '/magnifying-glass-svgrepo-com.svg';
import Paginator from '../../components/Paginator/Paginator';
import { AppLink } from '../../components/AppLink';
import {
  BookListContext,
  SearchContext,
  useStateFromContext,
} from '../../app.context';
import { getSearchQueryUrl } from '../../route.utils';
import { useSelector } from 'react-redux';
import { useGetBooksQuery } from '../../store/books-query';

export const SearchResult = () => {
  const [data, setData] = useState<BookSearchData | null>(null);
  const { searchTerm: initialSearchTerm } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [error, setError] = useState(false);
  const searchContext = useStateFromContext();

  const navigate = useNavigate();

  const searchState = useSelector((state: AppState) => state.search);

  const searchState2 = useSelector((state: AppState) => state.search);
  const queryStuff = useGetBooksQuery(searchState2);

  useEffect(() => {
    setData(null);
    const fetchBooks = async () => {
      try {
        const result = await queryBooks({
          searchTerm: searchContext.searchTerm,
          currentPage: searchContext.page,
          itemsPerPage: searchContext.itemsPerPage,
        });
        setData(result);
      } catch (error) {
        setError(true);
      }
    };
    fetchBooks();
  }, [
    searchContext.searchTerm,
    searchContext.page,
    searchContext.itemsPerPage,
  ]);

  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  const mainRender = () => {
    return (
      <div className="main-container-hight wrapper">
        <div className="flex justify-center p-4">
          <div className="input-bar relative w-96">
            <input
              className="border-2 border-gray-800 w-full p-1 pl-3 rounded-3xl text-xs mb-8 relative z-10"
              type="text"
              placeholder="Type the name of book..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  {
                    e.preventDefault();
                    const inputElement = e.target as HTMLInputElement;
                    setSearchTerm(inputElement.value);
                    const link = getSearchQueryUrl({
                      ...searchContext,
                      searchTerm: searchTerm,
                    });
                    navigate(link);
                  }
                }
              }}
            />
            {searchTerm?.trim() && (
              <AppLink
                queryParams={{
                  ...searchContext,
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
                <BookListContext.Provider value={{ bookList: data.books }}>
                  <BookCardList></BookCardList>
                </BookListContext.Provider>
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
