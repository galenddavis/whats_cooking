import React from 'react';
import "../../Stylesheets/session_form.scss";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            email: '',
            password: '',
          };
          
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    

    componentWillUnmount() {
      this.props.removeErrors();
    }

    update(field) {
        
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        }
    }

    handleSubmit(event) {
        
        event.preventDefault();
        // let user = {
        //     username: this.state.username,
        //     email: this.state.email,
        //     password: this.state.password
        // }
        this.props.processForm(this.state).then(this.props.closeModal)
        
        // if (this.props.processForm(user)) {
        //   this.props.closeModal()
        // }
    }

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
              <section className="modal-content">
                <label>Username
                  <input
                    type="text"
                    // placeholder="Username"
                    value={this.state.username}
                    onChange={this.update("username")}
                    required
                  />
                </label>
                <label>Email
                  <input
                    type="email"
                    // placeholder="Email"
                    value={this.state.email}
                    onChange={this.update("email")}
                    required
                  />
                </label>
                <label>Password
                  <input
                    type="password"
                    // placeholder="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    required
                  />
                </label>
                <input type="submit" value='Lets Get Cookin!' id='modal-submit' />
              </section>
            </form>
          </div>
        );
    }
}

export default SessionForm;
