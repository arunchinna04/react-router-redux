import React, { Component} from 'react';
import { browserHistory } from 'react-router';
import { authenticateUsers } from  '../api/user';
//import { Router, useRouterHistory } from 'react-router'

export default class Login extends Component {

  // This will be called when the user clicks on the login button
  login(e) {
    e.preventDefault();
    // Here, we call an external AuthService. We’ll create it in the next step
    const email = this.refs.email.value
    const pass = this.refs.pass.value
   
     const data = {'email':email,'password':pass};
        authenticateUsers(data).then(function(response) {
           browserHistory.push('/app/foo')
          console.log(" logging in", response);
        }).catch(function(err) {
            console.error(err);
        });

  }

  render() {
    return (
      <div>
        <form role="form">
        <div className="form-group">
          <input type="text" ref="email" placeholder="Username" />
          <input type="password" ref="pass" placeholder="Password" />
        </div>
        <button type="submit" onClick={this.login.bind(this)}>Submit</button>
      </form>
    </div>
    );
  }
}

