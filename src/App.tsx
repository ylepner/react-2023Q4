import { Route, Routes } from 'react-router';
import { useMemo } from 'react';
import BookCardDetails from './pages/HomePage/components/BookCardDetails/BookCardDetails';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useLocation, useParams } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { SearchResult } from './pages/SearchResults/SearchResults';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

function BindSearchResult() {
  const { searchTerm } = useParams();
  const query = useQuery();
  return <SearchResult searchTerm={searchTerm ?? ''} page={parseInt(query.get('page') || '0')} take={parseInt(query.get('take') || '10')} />;
}

function BindDetailsId() {
  const { id } = useParams();
  return <BookCardDetails id={id ?? ''} />;
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchTerm" element={<BindSearchResult />}>
          <Route
            path="details/:id"
            element={<BindDetailsId/>}
          ></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
