import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    logoutUser(event) {
        event.preventDefault();
        console.log(this.props)
        this.props.logout()
        this.props.history.push('/');
    }

    // handleSubmit(e) {
    //   e.preventDefault();
    //   this.props.logout().then(this.props.history.push('/'))
    // }

    render() {
        const authButtons = this.props.loggedIn ? (
            <div className='session-button'>
                <h1 onClick={this.logoutUser}>Log Out</h1>
            </div>
        ) : (
            <div className='session-button'>
                {/* <Link to='/login' className='userAuth'>Log In</Link>
                <Link to='/signup' className='userAuth'>Sign Up</Link> */}
                <h2 onClick={() => this.props.login({username: 'user2', email: 'user2@email.com', password: 'Starwars'})}>Demo Login</h2>
                <h2 onClick={() => this.props.openModal('signup')}>Sign Up</h2>
                <h2 onClick={() => this.props.openModal('login')}>Log In</h2>
            </div>
        )

        return (
          <div className="navbar">
            <section className="burger">
              <div className="bun"></div>
              <div className="tomato"></div>
              <div className="lettuce"></div>
              <div className="patty"></div>
              <div className="bun"></div>
            </section>
            <Link to="/" className="logo">
              What's Cooking
            </Link>
            {authButtons}
          </div>
        );
    }
}

export default NavBar;