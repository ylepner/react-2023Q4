import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import BookCardList from '../../components/BookCardList/BookCardList';
import magnifyingGlassIcon from '/magnifying-glass-svgrepo-com.svg';
import Paginator from '../../components/Paginator/Paginator';
import { AppLink } from '../../components/AppLink';
import { BookListContext, useStateFromContext } from '../../app.context';
import { useGetBooksQuery } from '../../store/books-query';
import { setSearchTerm } from '../../store/reducer';
import { useDispatch } from 'react-redux';
import './SearchResultsPage.css';

export const SearchResult = () => {
  const searchState = useStateFromContext();
  const [searchTerm, setCurrentSearchTerm] = useState(searchState.searchTerm);
  const dispatch = useDispatch();

  console.log({ searchState });
  const { data, error } = useGetBooksQuery(searchState);

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
              onChange={(e) => setCurrentSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  {
                    console.log(searchTerm);
                    e.preventDefault();
                    dispatch(setSearchTerm(searchTerm));
                  }
                }
              }}
            />
            {searchTerm?.trim() && (
              <AppLink
                queryParams={{
                  ...searchState,
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
