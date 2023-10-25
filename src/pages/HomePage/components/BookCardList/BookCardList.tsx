import { Component } from 'react';
import { BookCardResponseBooks } from '../BookCard/models';

interface State {
  searchTerm: string;
  searchResults: BookCardResponseBooks[];
}

class BookCardList extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: [],
    };
  }

  render() {
    return (
      <div className="card-list">
        {this.state.searchResults.map((result, index) => (
          <div key={index}>
            <h2>{result.title}</h2>
            <p>{result.publish_date}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BookCardList;
