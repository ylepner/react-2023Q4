import { Route, Routes } from 'react-router';
import BookCardDetails from './pages/HomePage/components/BookCardDetails/BookCardDetails';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/works/:id" element={<BookCardDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
