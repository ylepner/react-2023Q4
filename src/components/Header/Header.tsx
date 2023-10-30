import bookOpenIcon from './BookOpen.svg';
import bookmarkIcon from './BOOKMARK_SIMPLE.svg';

const Header = () => {
  return (
    <header className="wrapper pt-5 pb-5 flex justify-between">
      <div className="flex">
        <img className="pr-3" src={bookOpenIcon} alt="book icon" />
        <h3>Open Library</h3>
      </div>
      <button>
        <img src={bookmarkIcon} alt="bookmark icon" />
      </button>
    </header>
  );
};
export default Header;
