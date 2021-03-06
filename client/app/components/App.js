import React, { Component} from 'react'
import {AppBar,LeftNav,MenuItem,List,ListItem  } from 'material-ui';
import { RouteHandler, Link, browserHistory } from 'react-router';
import { getMenu } from  '../api/user';
var Menu = React.createClass({

   getInitialState: function() {
    return {
      data: []
    };
  },

   loadData: function () {

    getMenu().then(function(response){
        this.setState({data: response});
    }.bind(this))
       
    },

    componentDidMount: function () {
        this.loadData();
    },

    render: function () {
    //var notes = this.props.notepad;
    const MenuList = this.state.data;

    return (
      <List>
      {MenuList.map(menu => (
                       <ListItem  onClick={() => browserHistory.push(menu.route)} primaryTogglesNestedList={true}>{menu.name}</ListItem>
                  ))}
        </List>
           
    );
  }
});


export default class App extends Component {

  // This will be called when the user clicks on the login button
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render(){
    return (
    <div>
    
      <AppBar title="Welcome" onLeftIconButtonTouchTap={this.handleToggle} />    
        <LeftNav
          open={this.state.open}
          ref="leftNav"
          className = "left-nav"
          docked={true}>
            <div onClick={this.handleToggle}>
             <Menu />
            </div>          

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


 // <ListItem primaryTogglesNestedList={true}><Link to="app">DashBoard</Link></ListItem>
 //            <ListItem  onClick={() => browserHistory.push('/app/students')} primaryTogglesNestedList={true}>My Account</ListItem>
 //            <ListItem primaryTogglesNestedList={true}><Link to="app/students">Attendance</Link></ListItem>
 //            <ListItem primaryTogglesNestedList={true}
 //                 nestedItems={[<ListItem
 //                  key={1}
                 
 //                ><Link to="app/students">Add Students</Link></ListItem>,
 //                <ListItem
 //                  key={2}
                
 //                  primaryTogglesNestedList={true}
 //                ><Link to="app/students">Delete Students</Link></ListItem>,
 //                <ListItem
 //                  key={3}
                           
 //                  disabled={true}
 //                  primaryTogglesNestedList={true}
 //                  nestedItems={[
 //                    <ListItem key={1}><Link to="app/students">Students Activity</Link></ListItem>,
 //                  ]}
 //                ><Link to="app/students">Logs</Link></ListItem>,
 //              ]}><Link to="app/students">Students</Link></ListItem>
 //            <ListItem onClick={() => browserHistory.push('/app/teachers')} primaryText="Teachers"  primaryTogglesNestedList={true}
 //                 nestedItems={[<ListItem
 //                  key={4}
 //                  primaryText="Add Teachers"
 //                />,
 //                <ListItem
 //                  key={5}
 //                  primaryText="Delete Teachers"
 //                  primaryTogglesNestedList={true}
 //                />,
 //                <ListItem
 //                  key={6}
 //                  primaryText="Teachers Activity"            
 //                  disabled={true}
 //                  primaryTogglesNestedList={true}
 //                  nestedItems={[
 //                    <ListItem key={1} primaryText="Logs"  />,
 //                  ]}
 //                />,
 //              ]}/>  
