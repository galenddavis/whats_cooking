import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.sidebarSlide = this.sidebarSlide.bind(this);
        this.returnHome = this.returnHome.bind(this);
    }

    logoutUser(event) {
        event.preventDefault();
        this.props.logout()
        this.props.history.push('/');

    }



    sidebarSlide = () => {  
        const slidebar = document.querySelector('.sidebar-parent')
        slidebar.classList.toggle('sidebar-parent-active');
        const text = document.querySelector('.animation')
        
        if (this.props.currentPath === '/' && text.className === 'animation') {
            // text.classList.remove('animation');
            text.classList.add('animation-active');
        } else if (this.props.currentPath === '/' && text.className === 'animation animation-active') {
            text.classList.remove("animation-active")
            // text.classList.add('animation');
        }
    }

    returnHome() {
        const slidebar = document.querySelector('.sidebar-parent')
        
        if (slidebar.className === 'sidebar-parent sidebar-parent-active') {
            slidebar.classList.remove('sidebar-parent-active');
        } else if (this.props.currentPath === '/' && slidebar.className === 'sidebar-parent') {
            slidebar.classList.add("sidebar-parent-active")
        }

        if (this.props.currentPath === '/') {
            const text = document.querySelector('.animation')
            text.classList.toggle('animation-active');
        }      
    }

    render() {
        const authButtons = this.props.loggedIn ? (
            <div className='session-button'>
                <h2><Link to='/profile'>Profile</Link></h2>
                <h2 onClick={this.logoutUser}>Log Out</h2>
            </div>
        ) : (
            <div className='session-button'>
                <h2 onClick={() => this.props.login({username: 'user2', email: 'user2@email.com', password: 'Starwars'})}>Demo Login</h2>
                <h2 onClick={() => this.props.openModal('signup')}>Sign Up</h2>
                <h2 onClick={() => this.props.openModal('login')}>Log In</h2>
            </div>
        )

        return (
            <div className='navbar'>
                <section className='burger' onClick={this.sidebarSlide}>
                    <div className='bun'></div>
                    <div className='tomato'></div>
                    <div className='lettuce'></div>
                    <div className='patty'></div>
                    <div className='bun'></div>
                </section>
                
                <Link to='/' onClick={this.returnHome} className='logo'>What's Cooking</Link>
                {authButtons}
            </div>
        )
    }
}

export default NavBar;
