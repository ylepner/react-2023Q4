import { ChangeEvent, Component, createRef } from 'react';

interface SearchPanelProps {
  onSearch: (searchTerm: string) => void;
}
class SearchPanel extends Component<SearchPanelProps, { value: string }> {
  private inputRef = createRef<HTMLInputElement>();
  constructor(props: SearchPanelProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('searchTerm') || '',
    };
  }

  componentWillUnmount() {
    this.saveToStorage(this.state.value);
  }

  saveToStorage(searchTerm: string) {
    localStorage.setItem('searchTerm', searchTerm);
  }

  handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
    this.saveToStorage(e.target.value);
  };

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
            value={this.state.value}
            onChange={this.handleSearchChange}
          />
          <button onClick={this.handleSearchTermChange}>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchPanel;
