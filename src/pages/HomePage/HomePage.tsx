import React, { Component } from 'react';
import SearchPanel from './components/SearchPanel/SearchPanel';
import BookCardList from './components/BookCardList/BookCardList';

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <SearchPanel />
        </div>
        <div>
          <BookCardList />
        </div>
      </>
    );
  }
}
