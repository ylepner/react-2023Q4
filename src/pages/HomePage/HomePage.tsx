import React, { Component } from 'react';
import SearchPanel from './components/SearchPanel/SearchPanel';
import BookCardList from './components/BookCardList/BookCardList';
import { BookCardResponseBooks } from './components/BookCard/models';

interface State {
  searchTerm: string;
  searchResults: BookCardResponseBooks[];
}

export default class App extends Component {
  onSearch = (searchTerm: string) => {
    console.log('User search: ', searchTerm);
  };

  render() {
    return (
      <div>
        <div className="flex flex-row">
          <SearchPanel onSearch={this.onSearch} />
        </div>
        <div>
          <BookCardList
            books={[
              {
                id: '1',
                title: '"Fantastic Mr Fox"',
                cover: 'Cover',
              },
            ]}
          />
        </div>
      </div>
    );
  }
}
