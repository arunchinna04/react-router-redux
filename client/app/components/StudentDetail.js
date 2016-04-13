import React, { Component} from 'react'
import { getStudentById } from  '../api/student';

var Detail = React.createClass({
  
   getInitialState: function() {
    return {
      data: []
    };
  },

   loadData: function () {
 const studentId = this.props.id;
   
     getStudentById(studentId).then(function(response){
         this.setState({data: response});
     }.bind(this))
       
    },

    componentDidMount: function () {
        this.loadData();        
    },

    render: function () {
        const studentInfo = this.state.data;
    return (

     <div>{studentInfo.firstName}</div>
    );
  }
});


export default class StudentDetail extends Component {
  render(){
    return (
           
               <Detail id={this.props.params.id}/>
           
   )
  }

}

