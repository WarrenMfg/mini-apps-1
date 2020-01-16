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
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.board !== this.state.board) {
      checkForWinner();
    }
  }

  handlePlay(e) {
    if ('row' in e.target.dataset && 'column' in e.target.dataset) { // if click is a circle
      let row = parseInt(e.target.dataset.row, 10);
      let column = parseInt(e.target.dataset.column, 10);

      if (this.state.board[row][column] === null) {
        console.log('valid play');
      }
    }

  }

  render() {
    return (
      <div>
        <h1>Mini apps - Challenge 4</h1>
        <h2>Connect Four</h2>
        <Board board={this.state.board} handlePlay={this.handlePlay}/>
      </div>
    );
  }
}

export default App;