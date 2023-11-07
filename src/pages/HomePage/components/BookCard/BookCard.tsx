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
      <div className="flex flex-col h-full">
        <div className="grow overflow-hidden flex items-center justify-center p-2">
          {!this.props.book.cover_i ? (
            <div>No image</div>
          ) : (
            <div>
              <img
                className="max-w-full max-h-full"
                src={`https://covers.openlibrary.org/b/id/${this.props.book.cover_i}.jpg`}
                alt="book cover"
              />
            </div>
          )}
        </div>
        <div className="card-info shrink-0 h-1/4">
          <h5 className="card-title truncate font-semibold">
            {this.props.book.title}
          </h5>
          <h5 className="card-author truncate">
            by {this.props.book.author_name}
          </h5>
        </div>
      </div>
    );
  }
}

export default BookCard;
