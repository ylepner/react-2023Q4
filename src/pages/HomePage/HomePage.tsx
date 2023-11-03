import SearchPanel from './components/SearchPanel/SearchPanel';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="wrapper">
      <div className="flex">
        <SearchPanel />
      </div>
    </div>
  );
};

export default HomePage;
