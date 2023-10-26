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
        Found: {this.props.books.length}
        {this.props.books.map((book, index) => {
          return (
            <div className="card w-40" key={index}>
              <img
                className="card-img-top"
                src={`https://covers.openlibrary.org/b/id/${book.cover}.jpg`}
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h5 className="card-cover">{book.cover}</h5>
                <h5 className="card-author">{book.authors}</h5>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BookCardList;
