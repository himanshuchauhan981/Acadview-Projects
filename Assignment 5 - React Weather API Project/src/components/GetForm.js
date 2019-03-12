import React,{ Component } from 'react';

import ShowFormData from './showFormData';
import '../GetForm.css';
class GetForm extends Component{
   state = {
      name : undefined,
      birthday : undefined,
      isData: false
   }
   getFormData = (e) =>{
      e.preventDefault()
      this.setState({
         name: e.target.elements.username.value,
         birthday: e.target.elements.bday.value,
         isData: true
      })
   }
   render(){
      const isData = this.state.isData
      return(
         <div class="containers">
            <h1>Registration Form</h1>
            <form name="myForm" action="#" onSubmit={this.getFormData}>
               <div class="form-containers">
                  <label>Name</label>
                  <input type="text" placeholder="Enter Name" name="username"/>
                  <label>Birthday</label>
                  <input type="date" name="bday"/>
                  <input type="submit" class="button" value="Submit"/>
               </div>
            </form>
            {isData ? (
                  <ShowFormData
                     name={this.state.name}
                     birthday={this.state.birthday}
                  />
               ) : ''
            }
         </div>
      )
   }
}

export default GetForm;
