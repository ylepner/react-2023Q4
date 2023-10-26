import React, { Component } from 'react';
import SearchPanel from './components/SearchPanel/SearchPanel';
import BookCardList from './components/BookCardList/BookCardList';
import { BookCard, BooksResponse } from './components/BookCard/models';

interface State {
  searchTerm: string;
  searchResults: BookCard[];
}

export default class App extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: [],
    };
  }

  onSearch = (searchTerm: string) => {
    fetch(
      `https://openlibrary.org/search.json?q=${searchTerm}&_spellcheck_count=0&limit=10&fields=key,cover_i,title,subtitle,author_name,name&mode=everything`
    )
      .then((res) => res.json())
      .then((data: BooksResponse) =>
        this.setState({
          searchResults: data.docs.map((doc) => ({
            id: doc.key,
            title: doc.title,
            cover: doc.cover_i?.toString() || '',
            authors: doc.author_name || [],
          })),
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="flex flex-row">
          <SearchPanel onSearch={this.onSearch} />
        </div>
        <div>
          <BookCardList books={this.state.searchResults} />
        </div>
      </div>
    );
  }
}
