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
    // debugger
      
      event.preventDefault();
      const chef = Object.assign({}, this.state);
      this.props.processForm(chef).then(this.close)
  }
  close() {
    debugger
    if (this.props.user === true) {
      debugger
      this.props.closeModal()
    }
  }
  render() {

      const errors = this.props.errors.map(error => {
          return (
              <li>{error}</li>
          )
      })
      const showErrors = this.props.errors.length > 0 ? <ul>{errors}</ul> : null

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
            </section>
          </form>
        </div>
      );
  }
}

export default SessionForm;
