import HomePage from './pages/HomePage/HomePage';
import ErrorBoundary from './ErrorBoundary';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ErrorBoundary>
      <Header />
      <HomePage />
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
