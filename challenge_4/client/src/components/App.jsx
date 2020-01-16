import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Mini apps - Challenge 4</h1>
        <h2>Connect Four</h2>
        <Board board={this.state.board}/>
      </div>
    );
  }
}

export default App;