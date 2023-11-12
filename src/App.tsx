import { Route, Routes } from 'react-router';
import BookCardDetails from './components/BookCardDetails/BookCardDetails';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import { SearchResult } from './pages/SearchResultsPage/SearchResultsPage';
import { useStateFromQuery } from './route.utils';
import ErrorBoundary from './ErrorBoundary';
import { AppLink } from './components/AppLink';
import { SearchContext } from './app.context';

function BindSearchResult() {
  const contextValues = useStateFromQuery();
  return (
    <SearchContext.Provider
      value={{
        bookId: contextValues.bookId,
        itemsPerPage: contextValues.itemsPerPage,
        page: contextValues.page,
        searchTerm: contextValues.searchTerm,
      }}
    >
      <SearchResult />
    </SearchContext.Provider>
  );
}

function BindDetailsId() {
  const queryParams = useStateFromQuery();
  return (
    <div>
      <ErrorBoundary>
        <BookCardDetails
          id={queryParams.bookId ?? ''}
          style={{ width: 'calc(100vw - 385px)' }}
        />
      </ErrorBoundary>
      <AppLink
        queryParams={{ ...queryParams, bookId: undefined }}
        className={'fixed-list fixed top-0 left-0 bottom-0'}
        style={{ zIndex: '999', right: '385px' }}
      ></AppLink>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchTerm" element={<BindSearchResult />}>
          <Route path="details/:id" element={<BindDetailsId />}></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
