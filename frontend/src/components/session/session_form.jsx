import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            email: '',
            password: '' 
        };

        this.handleSubmit = this.handleSubmit.bind(this);
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

    renderErrors() {
        const { errors } = this.props;
        return (
            <ul>
                {errors.map((error, i) => (<li key={i} >{error}</li>))}
            </ul>
        )
    }


    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
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
                    <button type='submit'>i am a button</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;
