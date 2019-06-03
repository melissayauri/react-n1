import React from 'react';
import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css'

import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import Navbar from './components/Navbar';
import Lateralmenu from './components/Lateralmenu'

function App() {
  return (
    <div>
      <Navbar/>


 <Lateralmenu/>
   
 </div>
   
  
  );
}

export default App;
