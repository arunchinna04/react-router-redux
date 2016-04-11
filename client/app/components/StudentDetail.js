import React, { Component} from 'react'

export default class StudentDetail extends Component {
  render(){
    return (
            <div>
              {this.props.params.id}

            </div>
   )
  }

}

