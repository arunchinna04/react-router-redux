import React, { Component} from 'react'
import { getUsers } from  '../api/user';
import { Link } from 'react-router';
import {Table, TableHeaderColumn, TableRow, TableHeader, TableRowColumn, TableBody } from 'material-ui';

var NotesList = React.createClass({

   getInitialState: function() {
    return {
      data: []
    };
  },

   loadData: function () {

    getUsers().then(function(response){
        this.setState({data: response});
    }.bind(this))
       
    },

    componentDidMount: function () {
        this.loadData();
        console.log('welcome')
    },

    render: function () {
    //var notes = this.props.notepad;
    const students = this.state.data;

    return (
      <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>First Name</TableHeaderColumn>
                    <TableHeaderColumn>Last Name</TableHeaderColumn>
                  </TableRow>
                </TableHeader>

                <TableBody>

                 {students.map(student => (
                      <TableRow>

                        
                        <TableRowColumn> <Link to={`/app/students/${student.id}`} >{student.id}</Link></TableRowColumn>
                        <TableRowColumn>{student.firstName}</TableRowColumn>
                        <TableRowColumn>{student.lastName}</TableRowColumn>
                      </TableRow>
                  ))}

                </TableBody>
              </Table>
    );
  }
});


export default class TableDetail extends Component {
     render(){
        return (
            <NotesList/>
          )
     }
}

