import React from 'react';

export default class Result extends React.Component {

  render(props) {
    return (
      <div>
        <h3>This is result page</h3>
        <p>Country: {this.props.country}</p>
        <p>City: {this.props.city}</p>
      </div>
    );
  }


}
