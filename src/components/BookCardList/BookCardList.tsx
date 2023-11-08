import BookCard from '../BookCard/BookCard';
import './BookCardList.css';
import { useContext } from 'react';
import { AppContext } from '../../app.context';

const BookCardList = () => {
  const context = useContext(AppContext);

  return (
    <div>
      <div className="flex flex-wrap flex-row gap-4 justify-center pb-6 pt-6 ">
        {context.bookList.map((book) => (
          <div key={book.id} className="card-book w-40">
            <BookCard book={book} parentUrl={`/search/${context.searchTerm}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCardList;
