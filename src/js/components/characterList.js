import React from 'react';
import { Link } from 'react-router-dom';

class CharacterList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  static getDerivedStateFromProps() {
    const auth = localStorage.getItem('login');
    auth ? console.log('true') : console.log('ff');
  }

  handleLogout = () => {
    localStorage.setItem('login', 'false');
    console.log(localStorage.getItem('login'));
  };

  render() {
    return (
      <>
        <h2>sample</h2>
        <Link to="/login" onClick={this.handleLogout}>logout</Link>
      </>
    );
  }
}


export default CharacterList;
