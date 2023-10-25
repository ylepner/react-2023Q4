import { Component, ChangeEvent } from 'react';
import { BookCardResponseBooks } from '../BookCard/models';
import './SearchPanel.css';

interface State {
  searchTerm: string;
  searchResults: BookCardResponseBooks[];
}

class SearchPanel extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: [],
    };
  }

  handleSearch = () => {
    fetch(`https://openlibrary.org/books/OL49760564M.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(this.state);
        this.setState({ searchResults: [data] });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="search-box">
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleSearchInputChange}
            placeholder="What book do you search for?"
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>
        <div className="card-list">
          {this.state.searchResults.map((result, index) => (
            <div key={index}>
              <h2>{result.title}</h2>
              <p>{result.publish_date}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchPanel;
