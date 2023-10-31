import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BookDetails } from '../BookCard/models';

const BookCardDetails = () => {
  console.log('Contact!');
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookDetails | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    console.log(id);
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
        <div className="flex flex-col border-1 border-dotted border-gray-500 rounded-lg w-1/3 text-center relative p-2">
          <img
            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}.jpg`}
            alt=""
          />
          <h4 className="p-5">{book.title}</h4>
          <span className="flex items-baseline">
            <h5 className="w-1/3">Author</h5>
            <div className="w-full border-b border-dotted border-black"></div>
            <h5 className="w-1/3 pb-3">No Name</h5>
          </span>

          <h5 className="h-1/6 pb-3">
            Nightmare Abbey, a venerable family-mansion, in a highly picturesque
            state of semi-dilapidation, pleasantly situated on a strip of dry
            land between the sea and the fens, at the verge of the county of
            Lincoln, had the honour to be the seat of Christopher Glowry,
            Esquire. This gentleman was naturally of an atrabilarious
            temperament, and much troubled with those phantoms of indigestion
            which are commonly called blue devils.
          </h5>
          <h5 className="pb-3">Publish date: 2020</h5>
          <h5 className="pb-3">Language English</h5>
          <h5 className="pb-3">304 pages</h5>
          <button className="absolute right-2 bottom-2">
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

// function styleDescriptionElement() {}

export default BookCardDetails;
