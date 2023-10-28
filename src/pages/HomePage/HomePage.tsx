import React, { Component } from 'react';
import SearchPanel from './components/SearchPanel/SearchPanel';
import BookCardList from './components/BookCardList/BookCardList';
import { BookInfo, BooksResponse } from './components/BookCard/models';
import './HomePage.css';
import { data as defaultData } from '../../data';

interface State {
  searchTerm: string;
  searchResults: BookInfo[];
  rendererError?: boolean;
  isLoading: boolean;
}

export default class HomePage extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem('searchTerm') || '',
      searchResults: defaultData,
      isLoading: false,
    };
  }

  componentDidMount(): void {
    if (this.state.searchTerm) {
      this.onSearch(this.state.searchTerm);
    }
  }

  onSearch = async (searchTerm?: string) => {
    localStorage.setItem('searchTerm', searchTerm || '');
    if (searchTerm === '') {
      searchTerm = 'ab';
    }
    this.setState({ isLoading: true, searchTerm: searchTerm ?? '' });
    try {
      const result = await fetch(
        `https://openlibrary.org/search.json?q=${
          searchTerm || 'ab'
        }&_spellcheck_count=0&limit=10&fields=key,cover_i,title,subtitle,author_name,name&mode=everything`
      );
      const data: BooksResponse = await result.json();
      this.setState({
        searchResults: data.docs.map((doc) => ({
          key: doc.key,
          title: doc.title,
          cover_i: doc.cover_i || undefined,
          author_name: doc.author_name || [],
        })),
      });
    } catch (e) {
    } finally {
      this.setState({ isLoading: false });
    }
  };

  setError = () => {
    this.setState({ rendererError: true });
  };

  throwError(): React.ReactNode {
    throw new Error('Error from renderer');
  }

  getHeader() {
    if (this.state.isLoading) {
      return <>Loading...</>;
    }
    return (
      <>
        {this.state.searchTerm ? (
          <span>Results for &apos;{this.state.searchTerm}&apos;</span>
        ) : (
          <>All books</>
        )}
      </>
    );
  }

  render() {
    return (
      <div className="h-screen wrapper">
        <button
          className="border-2 border-gray-800 p-2 rounded-3xl mb-8 bg-red-500"
          onClick={this.setError}
        >
          Throw error
        </button>
        {this.state.rendererError && <div>{this.throwError()}</div>}
        <div className="flex h-1/3">
          <SearchPanel
            onSearch={this.onSearch}
            searchTerm={this.state.searchTerm}
          />
        </div>
        <h2 className="pt-20 pb-8 text-center">{this.getHeader()}</h2>
        <div className="card-list flex justify-center">
          <BookCardList books={this.state.searchResults} />
        </div>
      </div>
    );
  }
}
