import React, { Component} from 'react'
import {AppBar,LeftNav,MenuItem,List,ListItem  } from 'material-ui';
import { RouteHandler, Link } from 'react-router';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

export default class App extends Component {

  // This will be called when the user clicks on the login button
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  redirect(url){
    console.log('redirect',url);
  }

  render(){
    return (
    <div>
    
      <AppBar title="Welcome" onLeftIconButtonTouchTap={this.handleToggle} />    
        <LeftNav
          open={this.state.open}
          ref="leftNav"
          className = "left-nav"
          docked={true}>
          <List>
            <ListItem  onTouchTap={this.redirect.bind(this)} primaryText="DashBoard"  primaryTogglesNestedList={true}></ListItem>
            <ListItem onTouchTap={this.redirect.bind(this)} primaryText="My Account"  primaryTogglesNestedList={true}></ListItem>
            <ListItem primaryText="Attendance"  primaryTogglesNestedList={true}></ListItem>
            <ListItem primaryText="Students"  primaryTogglesNestedList={true}
                 nestedItems={[<ListItem
                  key={1}
                  primaryText="Add Students"
                />,
                <ListItem
                  key={2}
                  primaryText="Delete Students"
                  primaryTogglesNestedList={true}
                />,
                <ListItem
                  key={3}
                  primaryText="Students Activity"            
                  disabled={true}
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <ListItem key={1} primaryText="Logs"  />,
                  ]}
                />,
              ]}/>
            <ListItem primaryText="Teachers"  primaryTogglesNestedList={true}
                 nestedItems={[<ListItem
                  key={4}
                  primaryText="Add Teachers"
                />,
                <ListItem
                  key={5}
                  primaryText="Delete Teachers"
                  primaryTogglesNestedList={true}
                />,
                <ListItem
                  key={6}
                  primaryText="Teachers Activity"            
                  disabled={true}
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <ListItem key={1} primaryText="Logs"  />,
                  ]}
                />,
              ]}/>  
      
            
           
    </List>

        </LeftNav>

<div className="container">
        
         {this.props.children}

     </div>
     </div>
   )
  }

}


 

// import React from 'react'
// import { Link, browserHistory } from 'react-router'

// export default function App({ children }) {
//   return (
//     <div>
//       <header>
//         Links:
//         {' '}
//         <Link to="/app">Home</Link>
//         {' '}
//         <Link to="/app/foo">Foo</Link>
//         {' '}
//         <Link to="/app/bar">Bar</Link>
//       </header>
//       <div>
//         <button onClick={() => browserHistory.push('/app/foo')}>Go to /foo</button>
//       </div>
//       <div style={{ marginTop: '1.5em' }}>{children}</div>
//     </div>
//   )
// }
