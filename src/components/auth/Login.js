import React from 'react';
import axios from 'axios';

// will be a classical component because forms require state (handleChange etc)

class AuthLogin extends React.Component {
  state = {};


  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //
  //   axios.post('/api/login', this.state)
  //     .then(() => this.props.history.push('/users'))
  //     .catch(() => {
  //       this.props.history.push('/login');
  //     });
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <input
            className="input"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>
        <button className="button is-primary">Submit</button>
      </form>
    );
  }
}

export default AuthLogin;
