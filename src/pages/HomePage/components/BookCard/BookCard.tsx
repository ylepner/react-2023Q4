import { BookInfo } from './models';
import { useNavigate } from 'react-router-dom';

interface BookCardProps {
  book: BookInfo;
}

const BookCard = ({ book }: BookCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full">
      <div className="grow overflow-hidden flex items-center justify-center p-2">
        {!book.cover_i ? (
          <div>No image</div>
        ) : (
          <div>
            <img
              className="max-w-full max-h-full"
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`}
            />
          </div>
        )}
      </div>
      <div className="card-info shrink-0 h-1/4">
        <h5 className="card-title truncate font-semibold">{book.title}</h5>
        <h5 className="card-author truncate">by {book.author_name}</h5>
      </div>
      <button onClick={() => navigate(`details${book.key}`)}>
        Card Details
      </button>
    </div>
  );
};

export default BookCard;
