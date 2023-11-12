import bookOpenIcon from './BookOpen.svg';
import bookmarkIcon from './BOOKMARK_SIMPLE.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="wrapper pt-5 pb-5 flex justify-between">
      <Link to={'/'}>
        <div className="flex">
          <img className="pr-3" src={bookOpenIcon} alt="book icon" />
          <h3>Open Library</h3>
        </div>
      </Link>

      <button>
        <img src={bookmarkIcon} alt="bookmark icon" />
      </button>
    </header>
  );
};
export default Header;
