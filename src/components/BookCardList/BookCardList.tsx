import BookCard from '../BookCard/BookCard';
import './BookCardList.css';
import { useContext } from 'react';
import { BookListContext, useStateFromContext } from '../../app.context';

const BookCardList = () => {
  const bookListContext = useContext(BookListContext);
  const searchContext = useStateFromContext();

  return (
    <div>
      <div className="flex flex-wrap flex-row gap-4 justify-center pb-6 pt-6 ">
        {bookListContext.bookList.map((book) => (
          <div key={book.id} className="card-book w-40">
            <BookCard
              book={book}
              parentUrl={`/search/${searchContext.searchTerm}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCardList;
