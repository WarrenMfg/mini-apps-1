import React from 'react';

class Circle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // props: row, column, player
    return (
      <span
        className="Circle"
        data-row={this.props.row}
        data-column={this.props.column}
        data-player={this.props.player}
      >&nbsp;</span>
    );
  }
}

export default Circle;