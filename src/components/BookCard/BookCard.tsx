import { BookData } from '../../models';
import { getBookImgUrl } from '../../data.utils';
import { AppLink } from '../AppLink';
import { useStateFromContext } from '../../app.context';
import { setBookId as setBookIdAction } from '../../store/reducer';

interface BookCardProps {
  book: BookData;
  parentUrl?: string;
}

const BookCard = (props: BookCardProps) => {
  const context = useStateFromContext();

  return (
    <AppLink
      action={setBookIdAction(props.book.id)}
      queryParams={{ ...context, bookId: props.book.id }}
      className="flex flex-col h-full cursor-pointer max-w-full"
    >
      <div className="grow overflow-hidden flex items-center justify-center p-2 w-full">
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
      <div className="card-info shrink-0 h-1/4 w-full">
        <h5 className="card-title truncate font-semibold">
          {props.book.title}
        </h5>
        <h5 className="card-author truncate">
          by {props.book.authors?.join(', ') || 'No info'}
        </h5>
      </div>
    </AppLink>
  );
};

export default BookCard;
