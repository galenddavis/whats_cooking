import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(event) {
        event.preventDefault();
        this.props.logout();
    }

    render() {
        const authButtons = this.props.loggedIn ? (
            <div>
                <button onClick={this.logoutUser}>Log Out</button>
            </div>
        ) : (
            <div>
                {/* <Link to='/login' className='userAuth'>Log In</Link>
                <Link to='/signup' className='userAuth'>Sign Up</Link> */}
                <h1 onClick={() => this.props.openModal('signup')}>Sign Up</h1>
                <h1 onClick={() => this.props.openModal('login')}>Log In</h1>
            </div>
        )

        return (
            <div>
                <h2>What's Cooking?</h2>
                {authButtons}
            </div>
        )
    }
}

export default NavBar;