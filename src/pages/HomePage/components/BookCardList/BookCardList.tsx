import BookCard from '../BookCard/BookCard';

interface BookCardListProps {
  books: BookCard[];
}

const BookCardList = ({ books }: BookCardListProps) => {
  return (
    <div className="card-list">
      Found: {books.length}
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookCardList;
