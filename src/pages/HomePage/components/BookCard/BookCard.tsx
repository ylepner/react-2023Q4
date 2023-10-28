import { Component } from 'react';
import { BookInfo } from './models';

interface BookCardProps {
  book: BookInfo;
}

class BookCard extends Component<BookCardProps> {
  constructor(props: BookCardProps) {
    super(props);
  }

  render() {
    return (
      <div className="card w-40">
        <img
          className="card-img-top"
          src={`https://covers.openlibrary.org/b/id/${this.props.book.cover}.jpg`}
        />
        <h5 className="card-title">{this.props.book.title}</h5>
        <div className="card-body">
          <h5 className="card-title">{this.props.book.title}</h5>
          <h5 className="card-cover">{this.props.book.cover_i}</h5>
          <h5 className="card-author">{this.props.book.author_name}</h5>
        </div>
      </div>
    );
  }
}

export default BookCard;
