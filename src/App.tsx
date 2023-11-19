import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import { SearchResult } from './pages/SearchResultsPage/SearchResultsPage';
import { useStateFromQuery } from './route.utils';
import { SearchContext } from './app.context';
import { Provider } from 'react-redux';
import { store } from './store/store';

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

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<BindSearchResult />}></Route>
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
