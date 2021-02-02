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
        // debugger
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        }
    }

    handleSubmit(event) {
        debugger
        event.preventDefault();
        // let user = {
        //     username: this.state.username,
        //     email: this.state.email,
        //     password: this.state.password
        // }
        this.props.processForm(this.state).then(this.props.closeModal)
        
        // if (this.props.formType === 'Sign Up') {
        //     this.props.processForm(user).then(this.props.login(user))
        // } else {
        // }
    }

    // renderErrors() {
    //     const { errors } = this.props;
    //     return (
    //         <ul>
    //             {errors.map((error, i) => (<li key={i} >{error}</li>))}
    //         </ul>
    //     )
    // }


    render() {

        const errors = this.props.errors.map(error => {
            return (
                <li>{error}</li>
            )
        })
        const showErrors = this.props.errors.length ? <ul>{errors}</ul> : null

        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              {showErrors}
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update("username")}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update("email")}
                required
              />
              <input
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.update("password")}
                required
              />
              <input type="submit" value={this.props.formType} />
            </form>
          </div>
        );
    }
}

export default SessionForm;
