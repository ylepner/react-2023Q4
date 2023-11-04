import { NavLink } from 'react-router-dom';
import { BookData } from '../../models';
import { getBookImgUrl } from '../../data.utils';

interface BookCardProps {
  book: BookData;
  parentUrl?: string;
}

const BookCard = (props: BookCardProps) => {
  return (
    <NavLink
      to={`${props.parentUrl}/details/${props.book.id}`}
      className="flex flex-col h-full cursor-pointer"
    >
      <div className="grow overflow-hidden flex items-center justify-center p-2">
        {!props.book.coverId ? (
          <div>No image</div>
        ) : (
          <div>
            <img
              className="max-w-full max-h-full"
              src={getBookImgUrl(props.book)}
            />
          </div>
        )}
      </div>
      <div className="card-info shrink-0 h-1/4">
        <h5 className="card-title truncate font-semibold">
          {props.book.title}
        </h5>
        <h5 className="card-author truncate">
          by {props.book.authors.join(', ')}
        </h5>
      </div>
    </NavLink>
  );
};

export default BookCard;