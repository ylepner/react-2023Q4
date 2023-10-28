import { Component } from 'react';
import BookCard from '../BookCard/BookCard';
import { BookInfo } from '../BookCard/models';
import './BookCardList.css';

interface BookCardListProps {
  books: BookInfo[];
}

class BookCardList extends Component<BookCardListProps> {
  constructor(props: BookCardListProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="text-center p-5">Results: {this.props.books.length}</div>
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          {this.props.books.map((book) => (
            <BookCard key={book.key} book={book} />
          ))}
        </div>
      </div>
    );
  }
}
export default BookCardList;
