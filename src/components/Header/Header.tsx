import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="wrapper pt-5 pb-5 flex justify-between">
        <div className="flex">
          <img
            className="pr-3"
            src="./src/assets/BookOpen.svg"
            alt="book icon"
          />
          <h3>Open Library</h3>
        </div>
        <button>
          <img src="./src/assets/BOOKMARK_SIMPLE.svg" alt="bookmark icon" />
        </button>
      </header>
    );
  }
}
export default Header;
