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
      this.close = this.close.bind(this);
      
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
      const chef = Object.assign({}, this.state);
      this.props.processForm(chef).then(this.close)
  }

  close() {
    if (this.props.user === true) {
      this.props.closeModal()
    }
  }

  render() {

      const errors = this.props.errors.map(error => {
          return (
              <li className="error-msg">{error}</li>
          )
      })
      const showErrors = this.props.errors.length > 0 ? <ul className='errors-container'>{errors}</ul> : null

    const signupForm = <label>Username
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update("username")}
                            required
                          />
                        </label>

      return (
        <div>
          <form onSubmit={this.handleSubmit}>

            <section className="modal-content">
              {showErrors}
              {this.props.formType === 'Sign Up' ? signupForm : null}
              <label>Email
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.update("email")}
                  required
                />
              </label>
              <label>Password
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  required
                />
              </label>
              <input type="submit" value='Lets Get Cookin!' id='modal-submit' />
              <h2 className="demo" onClick={() => this.props.login({ username: 'user2', email: 'user2@email.com', password: 'Starwars' }).then(this.close)}>Demo Login</h2>
            </section>
          </form>
        </div>
      );
  }
}

export default SessionForm;
