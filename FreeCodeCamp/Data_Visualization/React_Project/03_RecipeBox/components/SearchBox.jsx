import React from 'react';

export default class SearchBox extends React.Component {
    render() {
        return (
            <input
              type="text"
              className="form-control"
              placeholder="Enter search here"
              autoComplete={false}
              style={{width: '80%', marginBottom: '10px'}}
              value={this.props.searchText}
              onChange={ event => this.props.onChange(event.target.value) }
            />
        )
    }
}
