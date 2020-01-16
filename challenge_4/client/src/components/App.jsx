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
      ],
      isGameWon: false,
      winner: null
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.checkForWinner = this.checkForWinner.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {

  // }

  checkForWinner() {
    let row = this.checkRows(); // receives 1 or 2 or false
    let column = this.checkColumns();
    // let forwardD = this.checkForwardD();
    console.log('row', row, 'column', column, /*'forwardD', forwardD*/);
    // let backwardD = this.checkBackwardD();
    // if (row || column || forwardD || backwardD) {
    //   this.setState({isGameWon: true});
    // }
  }

  checkRows() {
    let playerOne = 0;
    let playerTwo = 0;
    let board = this.state.board;
    for (let i = 0; i < board.length; i++) {
      let row = board[i];
      for (let j = 0; j < row.length; j++) {
        // check playerOne
        if (row[j] === 1) {
          playerOne++;
          if (playerOne === 4) {
            return 1;
          }
        } else {
          playerOne = 0;
        }

        // check playerTwo
        if (row[j] === 2) {
          playerTwo++;
          if (playerTwo === 4) {
            return 2;
          }
        } else {
          playerTwo = 0;
        }
      }
    }
    return false;
  }

  checkColumns() {
    let playerOne = 0;
    let playerTwo = 0;
    let board = this.state.board;
    let rowLength = this.state.board[0].length;

    for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < board.length; j++) {
        // check playerOne
        if (board[j][i] === 1) {
          playerOne++;
          if (playerOne === 4) {
            return 1;
          }
        } else {
          playerOne = 0;
        }

        // check playerTwo
        if (board[j][i] === 2) {
          playerTwo++;
          if (playerTwo === 4) {
            return 2;
          }
        } else {
          playerTwo = 0;
        }
      }
    }
    return false;
  }

  checkForwardD() {
    let playerOne = 0;
    let playerTwo = 0;
    let board = this.state.board;

    for (let i = 0; i < board.length; i++) {
      for (let j = 3; j <= 8; j++) {

      }
    }
  }



  handlePlay(e) {
    if ('row' in e.target.dataset && 'column' in e.target.dataset) { // if click is a circle
      // let row = parseInt(e.target.dataset.row, 10); // is this needed?
      let column = parseInt(e.target.dataset.column, 10);
      let board = this.state.board;

      if (board[0][column] === null) { // if column is not filled up yet
        // figure out which row to place play
        for (let row = 0; row < board.length; row++) {
          if (board[row][column]) {
            this.setState(prevState => {
              prevState.board[row - 1][column] = 1;
              return {board: prevState.board};
            });
            return;
          }
        }
        this.setState(prevState => {
          prevState.board[prevState.board.length - 1][column] = 1;
          return {board: prevState.board};
        });
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Mini apps - Challenge 4</h1>
        <h2>Connect Four</h2>
        <h3>You are Player 1 (red)</h3>
        {this.state.isGameWon ?
          <div>PLAYER {this.state.winner} WINS!!!</div> :
          <Board
            board={this.state.board}
            handlePlay={this.handlePlay}
            checkForWinner={this.checkForWinner}
          />}
      </div>
    );
  }
}

export default App;