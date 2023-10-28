import React, { Component } from 'react';
import SearchPanel from './components/SearchPanel/SearchPanel';
import BookCardList from './components/BookCardList/BookCardList';
import { BookInfo, BooksResponse } from './components/BookCard/models';
import './HomePage.css';

interface State {
  searchTerm: string;
  searchResults: BookInfo[];
  networkError?: false;
  rendererError?: boolean;
}

export default class HomePage extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem('searchTerm') || '',
      searchResults: [],
    };
  }

  componentDidMount(): void {
    if (this.state.searchTerm) {
      this.onSearch(this.state.searchTerm);
    }
  }

  onSearch = (searchTerm?: string) => {
    localStorage.setItem('searchTerm', searchTerm || '');
    if (searchTerm === '') {
      searchTerm = 'ab';
    }
    fetch(
      `https://openlibrary.org/search.json?q=${searchTerm}&_spellcheck_count=0&limit=10&fields=key,cover_i,title,subtitle,author_name,name&mode=everything`
    )
      .then((res) => res.json())
      .then((data: BooksResponse) =>
        this.setState({
          searchResults: data.docs.map((doc) => ({
            key: doc.key,
            title: doc.title,
            cover_i: doc.cover_i || undefined,
            author_name: doc.author_name || [],
          })),
        })
      );
  };

  setError = () => {
    this.setState({ rendererError: true });
  };

  throwError(): React.ReactNode {
    throw new Error('Error from renderer');
  }

  render() {
    return (
      <div className="h-screen wrapper">
        <div className="flex h-1/3">
          <SearchPanel
            onSearch={this.onSearch}
            searchTerm={this.state.searchTerm}
          />
        </div>
        <h2 className='pt-20 pb-10'>Trending Books</h2>
        <div className="h-1/2 card-list">
          <BookCardList books={this.state.searchResults} />
        </div>
        <button className="h-1/2" onClick={this.setError}>
          Throw error
        </button>
        {this.state.rendererError && <div>{this.throwError()}</div>}
      </div>
    );
  }
}
