import React, { Component} from 'react';
import { browserHistory } from 'react-router';
import { authenticateUsers } from  '../api/user';
//import { Router, useRouterHistory } from 'react-router'
import { TextField,  RaisedButton } from 'material-ui';

export default class Login extends Component {

  // This will be called when the user clicks on the login button
  login(e) {
    //super();
    e.preventDefault();
    // Here, we call an external AuthService. We’ll create it in the next step
   //console.log(this.refs)
    const email = this.refs.email.getValue();
    const pass = this.refs.pass.getValue //console.log('login',email);
      const data = {'email':email,'password':pass};
         authenticateUsers(data).then(function(response) {
           if(response){
            browserHistory.push('/app')
           }
          
         }).catch(function(err) {
             console.error(err);
         });

  }

 //  _onChange(e, value) {
 //  console.log(value);

 //  //Or you can do this elsewhere in your component
 // // console.log(this.refs.email.getValue());
 //  }

  render(){
    return(
        <div>
           <h1><span className="fa fa-sign-in"></span>Login</h1>
           <form>
             <TextField  hintText="Email" floatingLabelText="Email" ref="email"/><br/>
             <TextField  hintText="Password" floatingLabelText="Password" ref="pass"/><br/>
             <RaisedButton label="Login" onTouchTap={this.login.bind(this)} primary={true} />
           </form>
        </div>
      )
  }

  // render() {
  //   return (
  //     <div>
  //       <form role="form">
  //       <div className="form-group">
  //         <input type="text" ref="email" placeholder="Username" />
  //         <input type="password" ref="pass" placeholder="Password" />
  //       </div>
  //       <button type="submit" onClick={this.login.bind(this)}>Submit</button>
  //     </form>
  //   </div>
  //   );
  // }

}

