import React from 'react';

class Score extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // props: row, column, player
    return (
      <div>
        {this.props.score.score}
      </div>
    );
  }
}

export default Score;