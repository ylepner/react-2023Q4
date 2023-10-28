import { Component, createRef } from 'react';

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
      <div>
        <div className="search-box">
          <input
            type="text"
            placeholder="What book do you search for?"
            ref={this.inputRef}
            defaultValue={this.props.searchTerm}
          />
          <button onClick={this.handleSearchTermChange}>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchPanel;
