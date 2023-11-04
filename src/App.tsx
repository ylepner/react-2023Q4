import { Route, Routes } from 'react-router';
import { useMemo } from 'react';
import BookCardDetails from './components/BookCardDetails/BookCardDetails';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useLocation, useParams } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { SearchResult } from './pages/SearchResultsPage/SearchResultsPage';
import {
  COUNT_PARAM_NAME,
  PAGE_PARAM_NAME,
  useStateFromQuery,
} from './route.utils';
import ErrorBoundary from './ErrorBoundary';
import { AppLink } from './components/AppLink';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function BindSearchResult() {
  const { searchTerm } = useParams();
  const query = useQuery();
  return (
    <SearchResult
      searchTerm={searchTerm ?? ''}
      page={parseInt(query.get(PAGE_PARAM_NAME) || '0')}
      limit={parseInt(query.get(COUNT_PARAM_NAME) || '10')}
    />
  );
}

function BindDetailsId() {
  const queryParams = useStateFromQuery();
  return (
    <div>
      <ErrorBoundary>
        <BookCardDetails
          id={queryParams.bookId ?? ''}
          style={{ width: 'calc(85vw - 385px)' }}
        />
      </ErrorBoundary>
      <AppLink
        queryParams={{ ...queryParams, bookId: undefined }}
        className={
          'fixed-list fixed top-0 left-0 bottom-0 bg-slate-700 opacity-25'
        }
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
