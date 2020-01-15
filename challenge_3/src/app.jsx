import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      F1: false,
      F2: false,
      F3: false,
      confirm: false
    }; // zero-out state after confirmation
    this.handleCheckoutToF1 = this.handleCheckoutToF1.bind(this);
    this.handleF1toF2 = this.handleF1toF2.bind(this);
    this.handleF2toF3 = this.handleF2toF3.bind(this);
    this.handleF3toConfirm = this.handleF3toConfirm.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleCheckoutToF1() {
    this.setState({F1: true});
  }

  handleF1toF2() {
    this.setState({F1: false, F2: true});
  }

  handleF2toF3() {
    this.setState({F2: false, F3: true});
  }

  handleF3toConfirm() {
    this.setState({F3: false, confirm: true});
  }

  handleConfirm() {
    this.setState({confirm: false});
  }

  // "For the basic requirements, you MUST place all of your React components into one file, app.jsx"
  render() {
    if (!this.state.F1 && !this.state.F2 && !this.state.F3 && !this.state.confirm) {
      return (
        <div>
          <h1>Multistep Checkout</h1>
          <button onClick={this.handleCheckoutToF1}>Checkout</button>
        </div>
      );
    } else if (this.state.F1) {
      return (
        <div>
          <h1>Multistep Checkout</h1>
          <h2>Please provide your account information</h2>
          <button onClick={this.handleF1toF2}>Next</button>
        </div>
      );
    } else if (this.state.F2) {
      return (
        <div>
          <h1>Multistep Checkout</h1>
          <h2>Please provide your shipping information</h2>
          <button onClick={this.handleF2toF3}>Next</button>
        </div>
      );
    } else if (this.state.F3) {
      return (
        <div>
          <h1>Multistep Checkout</h1>
          <h2>Please provide your payment information</h2>
          <button onClick={this.handleF3toConfirm}>Confirm</button>
        </div>
      );
    } else if (this.state.confirm) {
      return (
        <div>
          <h1>Multistep Checkout</h1>
          <h2>Please confirm your purchase information</h2>
          <button onClick={this.handleConfirm}>Purchase</button>
        </div>
      );
    }
  }
}

export default App;