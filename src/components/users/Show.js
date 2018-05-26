import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';
// import InlineEdit from 'react-edit-inline';

class UsersShow extends React.Component {

  state = {
    user: null
  };

  componentDidMount () {
    // console.log(this.props.match.params.id);
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }));
  }

  handleDelete = () => {
    axios
      .delete(`/api/users/${this.props.match.params.id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/users'));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/register', this.state)
      .then(res => {
        Auth.setToken(res.data.token);
      })
      .then(() => this.props.history.push('/users'))
      .catch(() => this.props.history.replace('/login'));
  };

  render() {
    const { user } = this.state;
    if(!this.state.user) return null;
    return(
      <main>
        <h1 className="title is-4"> <strong> Meet: </strong> {user.name} </h1>
        <hr />
        <p className="subtitle"><strong>About me:</strong> {user.bio}</p>
        <p className="subtitle"><strong>Seeking:</strong> {user.seeking}</p>
        <img src={user.image} />
        <hr />
        <Link to={`/users/${user._id}/edit`}
          className="button"
        >Edit</Link>
        <button className="button is-danger" onClick={this.handleDelete} >Delete</button>
      </main>
    );
  }

}

export default UsersShow;
