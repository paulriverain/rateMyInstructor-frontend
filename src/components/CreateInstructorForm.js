import React, { Component } from 'react';

class CreateInstructorForm extends Component {
  state ={
    instructors: []
  }


  // const reviewInfo = this.props.review
  render(){
    console.log(this.props);
    return (
      <div className="CreateInstructorForm" >
        <form>
          Instructor's First Name: <input type="text" placeholder="instructor's first name" name="first_name" value={this.props.first_name} onChange={this.handleChange}/><br />

          Instructor's Last Name: <input type="text" placeholder="instructor's last name" name="last_name" value={this.props.last_name} onChange={this.handleChange}/><br />

          bootcamp_name: <input type="text" placeholder="bootcamp_name" name="bootcamp_name" value={this.props.bootcamp_name} onChange={this.handleChange}/><br />

          num_mods_taught: <input type="number" placeholder="num_mods_taught" name="num_mods_taught" value={this.props.num_mods_taught} onChange={this.handleChange}/><br />
          <input type="submit" value="Submit"/>

        </form>
      </div>
    );
  }
}
export default CreateInstructorForm;
