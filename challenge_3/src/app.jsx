import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      F1insertId: null,
      F1: false,
      F1name: '',
      F1email: '',
      F1password: '',

      F2insertId: null,
      F2: false,
      F2address1: '',
      F2address2: '',
      F2city: '',
      F2state: '',
      F2zip: '',
      F2phone: '',

      F3insertId: null,
      F3: false,
      F3cc: '',
      F3expiry: '',
      F3cvv: '',
      F3zip: '',

      confirm: false
    }; // zero-out state after confirmation
    this.handleCheckoutToF1 = this.handleCheckoutToF1.bind(this);
    this.F1HandleName = this.F1HandleName.bind(this);
    this.F1HandleEmail = this.F1HandleEmail.bind(this);
    this.F1HandlePassword = this.F1HandlePassword.bind(this);
    this.handleF1toF2 = this.handleF1toF2.bind(this);

    this.F2HandleAddress1 = this.F2HandleAddress1.bind(this);
    this.F2HandleAddress2 = this.F2HandleAddress2.bind(this);
    this.F2HandleCity = this.F2HandleCity.bind(this);
    this.F2HandleState = this.F2HandleState.bind(this);
    this.F2HandleZip = this.F2HandleZip.bind(this);
    this.F2HandlePhone = this.F2HandlePhone.bind(this);
    this.handleF2toF3 = this.handleF2toF3.bind(this);

    this.F3HandleCC = this.F3HandleCC.bind(this);
    this.F3HandleExpiry = this.F3HandleExpiry.bind(this);
    this.F3HandleCVV = this.F3HandleCVV.bind(this);
    this.F3HandleZip = this.F3HandleZip.bind(this);

    this.handleF3toConfirm = this.handleF3toConfirm.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  // F1 ///////////////////////////////////////////////
  handleCheckoutToF1() {
    this.setState({F1: true});
  }

  F1HandleName(e) {
    this.setState({F1name: e.target.value});
  }

  F1HandleEmail(e) {
    this.setState({F1email: e.target.value});
  }

  F1HandlePassword(e) {
    this.setState({F1password: e.target.value});
  }

  handleF1toF2(e) {
    e.preventDefault();

    let F1 = {
      name: this.state.F1name,
      email: this.state.F1email,
      password: this.state.F1password
    };

    fetch('http://127.0.0.1:8080/checkout/F1', {
      method: "POST",
      body: JSON.stringify(F1), // figure out how to encrypt
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(id => {
        console.log('F1 insertId', id);
        this.setState({F1insertId: id, F1: false, F2: true});
      })
      .catch(err => console.log(err));
  }

  // F2 ///////////////////////////////////////////////
  F2HandleAddress1(e) {
    this.setState({F2address1: e.target.value});
  }

  F2HandleAddress2(e) {
    this.setState({F2address2: e.target.value});
  }

  F2HandleCity(e) {
    this.setState({F2city: e.target.value});
  }

  F2HandleState(e) {
    this.setState({F2state: e.target.value});
  }

  F2HandleZip(e) {
    this.setState({F2zip: e.target.value});
  }

  F2HandlePhone(e) {
    this.setState({F2phone: e.target.value});
  }

  handleF2toF3(e) {
    e.preventDefault();

    let F2 = {
      address1: this.state.F2address1,
      address2: this.state.F2address2,
      city: this.state.F2city,
      state: this.state.F2state,
      shippingZip: this.state.F2zip,
      phone: this.state.F2phone
    };

    fetch('http://127.0.0.1:8080/checkout/F2', {
      method: "POST",
      body: JSON.stringify(F2), // figure out how to encrypt
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(id => {
        console.log('F2 insertId', id);
        this.setState({F2insertId: id, F2: false, F3: true});
      })
      .catch(err => console.log(err));
  }

  // F3 ///////////////////////////////////////////////
  F3HandleCC(e) {
    this.setState({F3cc: e.target.value});
  }

  F3HandleExpiry(e) {
    this.setState({F3expiry: e.target.value});
  }

  F3HandleCVV(e) {
    this.setState({F3cvv: e.target.value});
  }

  F3HandleZip(e) {
    this.setState({F3zip: e.target.value});
  }

  handleF3toConfirm(e) {
    e.preventDefault();

    let F3 = {
      cc: this.state.F3cc,
      expiry: this.state.F3expiry,
      cvv: this.state.F3cvv,
      billingZip: this.state.F3zip
    };

    fetch('http://127.0.0.1:8080/checkout/F3', {
      method: "POST",
      body: JSON.stringify(F3), // figure out how to encrypt
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(id => {
        console.log('F3 insertId', id);
        this.setState({F3insertId: id, F3: false, confirm: true});
      })
      .catch(err => console.log(err));
  }


  // F4 ///////////////////////////////////////////////
  handleConfirm() {
    this.setState({confirm: false});
  }

  // "For the basic requirements, you MUST place all of your React components into one file, app.jsx"
  // XSS needs to be handled for every form (SQL injection)
  // On purchase abandonment, use insertIds to DELETE FROM each table WHERE id...
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
          <form>
            <input
              placeholder="name"
              type="text"
              value={this.state.F1name}
              onChange={this.F1HandleName}
              required
            />
            <input
              placeholder="email"
              type="email"
              value={this.state.F1email}
              onChange={this.F1HandleEmail}
              required
            />
            <input
              placeholder="password"
              type="password"
              value={this.state.F1password}
              onChange={this.F1HandlePassword}
              required
            />
            <input type="submit" value="Next" onClick={this.handleF1toF2} />
          </form>
        </div>
      );
    } else if (this.state.F2) {
      return (
        <div>
          <h1>Multistep Checkout</h1>
          <h2>Please provide your shipping information</h2>
          <form>
            <input
              placeholder="address 1"
              type="text"
              value={this.state.F2address1}
              onChange={this.F2HandleAddress1}
              required
            />
            <input
              placeholder="address 2 (optional)"
              type="text"
              value={this.state.F2address2}
              onChange={this.F2HandleAddress2}
            />
            <input
              placeholder="city"
              type="text"
              value={this.state.F2city}
              onChange={this.F2HandleCity}
              required
            />
            <input
              placeholder="state"
              type="text"
              value={this.state.F2state}
              onChange={this.F2HandleState}
              required
            />
            <input
              placeholder="shipping zip code"
              type="text"
              value={this.state.F2zip}
              onChange={this.F2HandleZip}
              required
            />
            <input
              placeholder="phone"
              type="text"
              value={this.state.F2phone}
              onChange={this.F2HandlePhone}
              required
            />
            <input type="submit" value="Next" onClick={this.handleF2toF3} />
          </form>
        </div>
      );
    } else if (this.state.F3) {
      return (
        <div>
          <h1>Multistep Checkout</h1>
          <h2>Please provide your payment information</h2>
          <form>
            <input
              placeholder="credit card number"
              type="text"
              value={this.state.F3cc}
              onChange={this.F3HandleCC}
              required
            />
            <input
              placeholder="expiration date"
              type="text"
              value={this.state.F3expiry}
              onChange={this.F3HandleExpiry}
              required
            />
            <input
              placeholder="CVV"
              type="text"
              value={this.state.F3cvv}
              onChange={this.F3HandleCVV}
              required
            />
            <input
              placeholder="billing zip code"
              type="text"
              value={this.state.F3zip}
              onChange={this.F3HandleZip}
              required
            />
            <button onClick={this.handleF3toConfirm}>Confirm</button>
          </form>
        </div>
      );
    } else if (this.state.confirm) {
      return (
        <div>
          <h1>Multistep Checkout</h1>
          <h2>Please confirm your purchase information</h2>
          <div>
            {/* F1name
            F1email
            F1password

            F2address1
            F2address2
            F2city
            F2state
            F2zip
            F2phone

            F3cc
            F3expiry
            F3cvv
            F3zip */}
          </div>
          <button onClick={this.handleConfirm}>Purchase</button>
        </div>
      );
    }
  }
}

export default App;