import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username = '',
            email = '',
            password = '' 
        }
    }

    update(field) {
        return event => this.setState({ [field]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        let user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(user)
    }


    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Username"
                        onChange={this.update('username')}
                        required
                    />
                    <input 
                        type="email"
                        placeholder="Email"
                        onChange={this.update('email')}
                        required
                    />
                    <input 
                        type="password"
                        placeholder="password"
                        onChange={this.update('password')}
                        required
                    />
                </form>
            </div>
        )
    }
}