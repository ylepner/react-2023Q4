import { Component } from 'react';
import BookCard from '../BookCard/BookCard';
import { BookInfo } from '../BookCard/models';

interface BookCardListProps {
  books: BookInfo[];
}

class BookCardList extends Component<BookCardListProps> {
  constructor(props: BookCardListProps) {
    super(props);
  }

  render() {
    return (
      <div className="card-list">
        Found: {this.props.books.length}
        {this.props.books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    );
  }
}
export default BookCardList;
