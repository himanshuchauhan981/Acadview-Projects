import React, {Component} from 'react';

class Display extends Component {
   render() {
      //Object Destruction
      // const { name, age, birthMonth} = this.props;
      const { displayInfos} = this.props;
      const displayList = displayInfos.map( info =>{
         return(
            <div class="card">
               <div key={info.id}>
                  <div>Name : { info.name } </div>
                  <div>Age : { info.age } </div>
                  <div>Birthday Month : { info.birthMonth } </div>
               </div>
            </div>
         )
      });
      return(
         <div>
         {displayList}
         </div>
      )
   }
}


export default Display;
