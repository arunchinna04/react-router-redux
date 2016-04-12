import React, { Component} from 'react'
import { Link } from 'react-router';
import {Table, TableHeaderColumn, TableRow, TableHeader, TableRowColumn, TableBody } from 'material-ui';
const StudentsList = [{
  lastName : "Chinna",
  firstName:"Arun",
  id:1
},{
  lastName : "Raj",
  firstName:"Chinna",
  id:2
},{
  lastName : "YYY",
  firstName:"XXX",
  id:3
},{
  lastName : "JJJJ",
  firstName:"ZZZZ",
  id:3
}]

export default class Studentlist extends Component {
   
  //   getInitialState: function() {
  //   return {
  //     username: '',
  //     lastGistUrl: ''
  //   };
  // },

  // componentDidMount: function() {
  //   // this.serverRequest = $.get(this.props.source, function (result) {
  //   //   var lastGist = result[0];
  //   //   this.setState({
  //   //     username: lastGist.owner.login,
  //   //     lastGistUrl: lastGist.html_url
  //   //   });
  //   // }.bind(this));

    
  //   console.log('In Mount')
  // },



  render(){

    
    return (
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>First Name</TableHeaderColumn>
                    <TableHeaderColumn>Last Name</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>

                 {StudentsList.map(student => (
                      <TableRow>
                        <TableRowColumn> <Link to="students/1" >{student.id}</Link></TableRowColumn>
                        <TableRowColumn>{student.firstName}</TableRowColumn>
                        <TableRowColumn>{student.lastName}</TableRowColumn>
                      </TableRow>
                  ))}

                </TableBody>
              </Table>

            </div>
   )
  }

}

