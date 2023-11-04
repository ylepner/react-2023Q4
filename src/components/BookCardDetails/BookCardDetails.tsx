import { useState, useEffect } from 'react';
import {
  AuthorResponse,
  BookFullDetailsResponse,
  EditionsResponse,
} from '../../api.models';
import './BookCardDetails.css';
import { getBookImgUrlByCoverId } from '../../data.utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { useStateFromQuery } from '../../route.utils';
import { AppLink } from '../AppLink';

const BookCardDetails = ({ id }: { id: string }) => {
  const [book, setBook] = useState<BookFullDetailsResponse | null>(null);
  const [author, setAuthor] = useState<string>('');
  const [editions, setEditions] = useState<EditionsResponse | null>(null);
  const queryParams = useStateFromQuery();

  useEffect(() => {
    fetch(`https://openlibrary.org/works/${id}.json`)
      .then((response) => response.json())
      .then((data: BookFullDetailsResponse) => {
        setBook(data);
        const authorKey = data.authors[0].author.key;
        return fetch(`https://openlibrary.org${authorKey}.json`);
      })
      .then((response) => response.json())
      .then((data: AuthorResponse) => {
        setAuthor(data.personal_name);
        return fetch(`https://openlibrary.org/works/${id}/editions.json`);
      })
      .then((response) => response.json())
      .then((data: EditionsResponse) => {
        setEditions(data);
      });
  }, [id]);

  return (
    <div>
      {book ? (
        <div className="card-details w-full flex flex-col border-1 border-dotted border-gray-500 rounded-lg text-center relative p-2">
          <div className="w-5">
            <AppLink queryParams={{ ...queryParams, bookId: undefined }}>
              <FontAwesomeIcon icon={faXmark} />
            </AppLink>
          </div>
          <BookCover coverId={book?.covers?.[0] || undefined} />
          <h4 className="p-5 font-light">{book.title}</h4>
          <h6 className="pb-3">
            {' '}
            {book?.description?.value ?? 'No Description'}
          </h6>
          <StyleDescriptionElement
            detailTitle="Author"
            detail={author ?? 'No Name'}
          />
          <StyleDescriptionElement
            detailTitle="Publish date"
            detail={editions?.entries[0].publish_date ?? 'No info'}
          />
          <StyleDescriptionElement
            detailTitle="Pages"
            detail={editions?.entries[0].number_of_pages ?? 'No info'}
          />
          <StyleDescriptionElement
            detailTitle="Publishers"
            detail={editions?.entries[0].publishers?.join(', ') ?? 'No info'}
          />
          <h5 className="truncate">Subjects: {book.subjects?.join(', ')}</h5>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const StyleDescriptionElement = (props: {
  detailTitle: string;
  detail: string | number;
}) => {
  return (
    <span className="flex items-baseline">
      <h5 className="pr-1">{props.detailTitle}</h5>
      <div className="grow border-b border-dotted border-black"></div>
      <h5 className="pb-3 pl-1">{props.detail}</h5>
    </span>
  );
};

function BookCover({ coverId }: { coverId?: number }) {
  if (coverId == null) {
    return <div>No Cover</div>;
  }
  return <img src={getBookImgUrlByCoverId(coverId)} alt="" />;
}

export default BookCardDetails;
