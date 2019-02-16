import React, {Component} from 'react';

import Display from './Display';

class App extends Component {
   state={
      displayInfos : [
         { name:'John', age:27, birthMonth:'July', id:1 },
         { name:'Wick', age:28, birthMonth:'June', id:2 },
         { name:'Richard', age:42, birthMonth:'September', id:3 }
      ]
   }
   render() {
      return (
         <div className="App">

            <h1 class="heading">My Basic React App</h1>
            <Display displayInfos={this.state.displayInfos} />
         </div>
      );
   }
}

export default App;
