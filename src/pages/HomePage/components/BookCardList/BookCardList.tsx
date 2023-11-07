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
        <div className="text-center p-5">
          Results: {this.props.books.length}
        </div>
        <div className="flex flex-wrap flex-row gap-4 justify-center pb-6">
          {this.props.books.map((book) => (
            <div key={book.key} className="card-book w-40">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default BookCardList;
