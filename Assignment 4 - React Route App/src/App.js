import React, { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import  Home from './components/home';
import About from './components/about';
class App extends Component{
   render(){
      return(
         <BrowserRouter>
         <div>
            <Route path="/" component = {Home} exact/>
            <Route path ="/about" component ={About}/>
         </div>
         </BrowserRouter>
      )
   }
}

export default App;
