import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  handleInputChange = (ev) => {
    this.setState({ term: ev.target.value });
  };

  handleFormSubmit = (ev) => {
    ev.preventDefault();
    //To do: make sure we call callback from parent component
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.handleFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
