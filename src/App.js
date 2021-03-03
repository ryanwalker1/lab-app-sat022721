
//import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';
import Toggle from './Toggle';
import Numbers from './Numbers';
//import LoginControl from './Login';

function App() {

  
  let guests = ["Jamie", "Sherine", "Diane"];

  return (
    <div className="App">
      <h1>hello world!</h1>
      {/* render the welcome component with props */}
       <Welcome name = "Ryan Walker"/>
       <Welcome name = "New Name"/>
       
       <h2> render all my guests</h2>      

       {

        guests.map((guest) =>  <Welcome name = {guest}/> )
       }
       <Clock/>
       <Clock/>
       <Clock/>    
       <Toggle/>  
       
       
    </div>
    
  );
}

export default App;
