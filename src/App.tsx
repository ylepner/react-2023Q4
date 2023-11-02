import { Route, Routes } from 'react-router';
import BookCardDetails from './pages/HomePage/components/BookCardDetails/BookCardDetails';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useParams } from 'react-router-dom';
import SearchResults from './pages/SearchResults/SearchResults';

function BindSearchResult() {
  const { searchTerm } = useParams();
  return <SearchResult searchTerm={searchTerm ?? ''} />;
}

function SearchResult(props: { searchTerm: string }) {
  return <div>Search result for: {props.searchTerm}</div>;
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SearchResults />} />
        <Route path="/search/:searchTerm" element={<BindSearchResult />}>
          <Route
            path="details/:id"
            element={<BookCardDetails id={'OL35351151W'} />}
          ></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
