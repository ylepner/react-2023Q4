import { useState, useEffect } from 'react';
import { BookFullDetailsResponse } from '../../api.models';
import './BookCardDetails.css';
import { getBookImgUrlByCoverId } from '../../data.utils';

const BookCardDetails = ({ id }: { id: string }) => {
  console.log('Contact!');
  const [book, setBook] = useState<BookFullDetailsResponse | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch(`https://openlibrary.org/works/${id}.json`)
      .then((response) => response.json())
      .then((data: BookFullDetailsResponse) => {
        console.log(data);
        setBook(data);
      });
  }, [id]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      {book ? (
        <div className="card-details flex flex-col border-1 border-dotted border-gray-500 rounded-lg text-center relative p-2">
          <BookCover coverId={book?.covers[0]} />
          <h4 className="p-5 font-light">{book.title}</h4>
          <h6 className="pb-3">{book.description.value}</h6>
          <StyleDescriptionElement
            detailTitle="Author"
            detail={book.authors.join(', ')}
          />
          <StyleDescriptionElement
            detailTitle="Publish date"
            detail={book.created.value}
          />
          <StyleDescriptionElement
            detailTitle="Subjects"
            detail={book.subjects.join(', ')}
          />
          <button className="text-right">
            <svg
              onClick={handleClick}
              fill={isClicked ? '#FDBF0F' : 'white'}
              width="18"
              height="25"
              viewBox="0 0 18 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 24L9 19L1 24V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H16C16.2652 1 16.5196 1.10536 16.7071 1.29289C16.8946 1.48043 17 1.73478 17 2V24Z"
                stroke="#3D3C3C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const StyleDescriptionElement = (props: {
  detailTitle: string;
  detail: string;
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
