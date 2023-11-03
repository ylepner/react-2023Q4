import BookCard from '../BookCard/BookCard';
import { BookInfo } from '../BookCard/models';
import './BookCardList.css';

interface BookCardListProps {
  books: BookInfo[];
  searchTerm?: string;
}

const BookCardList = (props: BookCardListProps) => {
  return (
    <div>
      <div className="flex flex-wrap flex-row gap-4 justify-center pb-6 pt-6">
        {props.books.map((book) => (
          <div key={book.key} className="card-book w-40">
            <BookCard book={book} parentUrl={`/search/${props.searchTerm}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCardList;
