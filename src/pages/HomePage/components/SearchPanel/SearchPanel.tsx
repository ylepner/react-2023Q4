import { Component, createRef } from 'react';

interface SearchPanelProps {
  onSearch: (searchTerm: string) => void;
}

class SearchPanel extends Component<SearchPanelProps> {
  private inputRef = createRef<HTMLInputElement>();
  constructor(props: SearchPanelProps) {
    super(props);
  }

  handleSearchTermChange = () => {
    const searchTerm = this.inputRef.current?.value ?? '';
    if (searchTerm) {
      this.props.onSearch(searchTerm);
    }
  };

  render() {
    return (
      <div>
        <div className="search-box">
          <input
            type="text"
            placeholder="What book do you search for?"
            ref={this.inputRef}
          />
          <button onClick={this.handleSearchTermChange}>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchPanel;
