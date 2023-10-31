import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BookDetails } from '../BookCard/models';

const BookCardDetails = () => {
  console.log('Contact!');
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookDetails | null>(null);

  useEffect(() => {
    console.log(id);
    fetch(`https://openlibrary.org/works/${id}.json`)
      .then((response) => response.json())
      .then((data: BookDetails) => setBook(data));
  }, [id]);

  return (
    <div>
      {book ? (
        <div>
          <h4>{book.title}</h4>
          <h5>by Test Author</h5>
          <h5>Description: {book.description}</h5>
          <h5>Publish date: 2020</h5>
          <h5>Language English</h5>
          <h5>304 pages</h5>
          <img
            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}.jpg`}
            alt=""
          />
          <button>Add to bookmarks</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookCardDetails;
