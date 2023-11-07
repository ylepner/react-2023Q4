import bookOpenIcon from './book-open.svg';
import bookmarkIcon from './bookmark.svg';
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="wrapper pt-5 pb-5 flex justify-between">
        <div className="flex">
          <img className="pr-3" src={bookOpenIcon} alt="" />
          <span className="header-title">Open Library</span>
        </div>
        <button>
          <img src={bookmarkIcon} alt="bookmark icon" />
        </button>
      </header>
    </>
  );
};
export default Header;
