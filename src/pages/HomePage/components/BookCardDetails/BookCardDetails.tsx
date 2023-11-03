import { useState, useEffect } from 'react';
import { BookDetails } from '../BookCard/models';
import './BookCardDetails.css';

const BookCardDetails = ({ id }: { id: string }) => {
  console.log('Contact!');
  const [book, setBook] = useState<BookDetails | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch(`https://openlibrary.org/works/${id}.json`)
      .then((response) => response.json())
      .then((data: BookDetails) => setBook(data));
  }, [id]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      {book ? (
        <div className="card-details flex flex-col border-1 border-dotted border-gray-500 rounded-lg text-center relative p-2">
          <img
            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}.jpg`}
            alt=""
          />
          <h4 className="p-5 font-light">{book.title}</h4>
          <h6 className="h-1/6 pb-3">
            Nightmare Abbey, a venerable family-mansion, in a highly picturesque
            state of semi-dilapidation, pleasantly situated on a strip of dry
            land between the sea and the fens, at the verge of the county of
            Lincoln, had the honour to be the seat of Christopher Glowry,
            Esquire. This gentleman was naturally of an atrabilarious
            temperament, and much troubled with those phantoms of indigestion
            which are commonly called blue devils.
          </h6>
          <StyleDescriptionElement detailTitle="Author" detail="No Name" />
          <StyleDescriptionElement detailTitle="Publish date" detail="2020" />
          <StyleDescriptionElement detailTitle="Language" detail="English" />
          <StyleDescriptionElement detailTitle="Pages" detail="304" />
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

export default BookCardDetails;
