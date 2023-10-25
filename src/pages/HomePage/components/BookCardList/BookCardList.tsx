import { Component } from 'react';
import { BookCard, BookCardResponseBooks } from '../BookCard/models';

interface BookCardListProps {
  books: BookCard[];
}

class BookCardList extends Component<BookCardListProps> {
  constructor(props: BookCardListProps) {
    super(props);
  }

  render() {
    return (
      <div className="card-list">
        {this.props.books.map((book, index) => {
          return (
            <div className="card" key={index}>
              <img className="card-img-top" src={book.cover} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h5 className="card-cover">{book.cover}</h5>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BookCardList;
