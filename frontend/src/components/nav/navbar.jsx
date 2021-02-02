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
            <div className='session-button'>
                <h1 onClick={this.logoutUser}>Log Out</h1>
            </div>
        ) : (
            <div className='session-button'>
                {/* <Link to='/login' className='userAuth'>Log In</Link>
                <Link to='/signup' className='userAuth'>Sign Up</Link> */}
                <h1 onClick={() => this.props.openModal('signup')}>Sign Up</h1>
                <h1 onClick={() => this.props.openModal('login')}>Log In</h1>
            </div>
        )

        return (
            <div className='navbar'>
                <section className='burger'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </section>
                <h2 className='logo' >What's Cooking?</h2>
                {authButtons}
            </div>
        )
    }
}

export default NavBar;