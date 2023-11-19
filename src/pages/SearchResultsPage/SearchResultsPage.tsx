import BookCardList from '../../components/BookCardList/BookCardList';
import magnifyingGlassIcon from '/magnifying-glass-svgrepo-com.svg';
import Paginator from '../../components/Paginator/Paginator';
import { AppLink } from '../../components/AppLink';
import { BookListContext, useStateFromContext } from '../../app.context';
import { useGetBooksQuery } from '../../store/books-query';
import { setSearchTerm } from '../../store/reducer';
import { useDispatch, useSelector } from 'react-redux';
import './SearchResultsPage.css';
import { setSearchTerm as setSearchTermAction } from '../../store/reducer';
import { StoreState } from '../../models';
import BookCardDetails from '../../components/BookCardDetails/BookCardDetails';
import { useEffect, useState } from 'react';

export const SearchResult = () => {
  const searchState = useStateFromContext();
  const [searchTerm, setSearchTerm] = useState(searchState.searchTerm);
  const dispatch = useDispatch();
  const searchTermFromStore = useSelector((state: StoreState) => {
    return state.appState.search.searchTerm;
  });

  useEffect(() => {
    dispatch(setSearchTermAction(searchTerm));
  }, [searchTerm, dispatch]);

  const bookId = useSelector((state: StoreState) => {
    return state.appState.selectedBookId;
  });

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
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  {
                    console.log(searchTerm);
                    e.preventDefault();
                  }
                }
              }}
            />
            {searchTerm?.trim() && (
              <AppLink
                action={setSearchTermAction(searchTerm)}
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
                {bookId && <BookCardDetails id={bookId}></BookCardDetails>}
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
