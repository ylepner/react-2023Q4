import { BookInfo } from './models';
import { NavLink } from 'react-router-dom';

interface BookCardProps {
  book: BookInfo;
  parentUrl?: string;
}

const BookCard = (props: BookCardProps) => {
  return (
    <NavLink
      to={`${props.parentUrl}/details${props.book.key}`}
      className="flex flex-col h-full cursor-pointer"
    >
      <div className="grow overflow-hidden flex items-center justify-center p-2">
        {!props.book.cover_i ? (
          <div>No image</div>
        ) : (
          <div>
            <img
              className="max-w-full max-h-full"
              src={`https://covers.openlibrary.org/b/id/${props.book.cover_i}.jpg`}
            />
          </div>
        )}
      </div>
      <div className="card-info shrink-0 h-1/4">
        <h5 className="card-title truncate font-semibold">
          {props.book.title}
        </h5>
        <h5 className="card-author truncate">by {props.book.author_name}</h5>
      </div>
    </NavLink>
  );
};

export default BookCard;
