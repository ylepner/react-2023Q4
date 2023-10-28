import { Component, createRef } from 'react';
import './SearchPanel.css';

interface SearchPanelProps {
  onSearch: (searchTerm: string) => void;
  searchTerm?: string;
}
class SearchPanel extends Component<SearchPanelProps> {
  private inputRef = createRef<HTMLInputElement>();
  constructor(props: SearchPanelProps) {
    super(props);
  }

  handleSearchTermChange = () => {
    const searchTerm = this.inputRef.current?.value ?? '';
    this.props.onSearch(searchTerm);
  };

  render() {
    return (
      <div className="flex w-full justify-around items-center">
        <div className="search-box w-1/3 relative">
          <div className="relative">
            <h1 className="text-gray-800 h1">What book do you looking for?</h1>
            <img
              className="book-img w-24 absolute top-10 right-0"
              src="../src/assets/book-gif.svg"
              alt=""
            />
          </div>
          <p className="p mt-8 mb-6">
            Explore our catalog and find your next read.
          </p>
          <div className="relative">
            <input
              className="border-2 border-gray-800 w-full p-1 pl-3 rounded-3xl text-xs mb-8 relative z-10"
              type="text"
              placeholder="Type the name of book or author..."
              ref={this.inputRef}
              defaultValue={this.props.searchTerm}
            />
            <div className="input-shadow w-full p-1 pl-3 rounded-3xl text-xs mb-8 bg-yellow-500 h-5 absolute top-3"></div>
            <span className="absolute right-2 top-1">
              <img
                src="../src/assets/magnifying-glass-svgrepo-com.svg"
                alt=""
              />
            </span>
          </div>
          <span className="flex justify-evenly items-center">
            <button
              className="flex border-2 border-gray-800 p-1 rounded-xl bg-yellow-400 text-xs w-1/3 h-9 justify-around items-center"
              onClick={this.handleSearchTermChange}
            >
              Explore
              <img className="w-5" src="../src/assets/Binoculars.svg" alt="" />
            </button>
            <div className="line w-2/3 ml-10"></div>
          </span>
        </div>
        <div className="search-image w-1/4">
          <img src="../src/assets/Rectangle9.svg" alt="" />
        </div>
      </div>
    );
  }
}

export default SearchPanel;
