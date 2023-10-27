import { BookCard } from './models';

interface BookCardProps {
  book: BookCard;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="card w-40">
      <img
        className="card-img-top"
        src={`https://covers.openlibrary.org/b/id/${book.cover}.jpg`}
      />
      <h5 className="card-title">{book.title}</h5>
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <h5 className="card-cover">{book.cover}</h5>
        <h5 className="card-author">{book.authors}</h5>
      </div>
    </div>
  );
};

export default BookCard;
