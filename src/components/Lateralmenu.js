import React from 'react';
import  './styles/lateralmenu.css'

class Lateralmenu extends React.Component{

render(){
    return(
        <div class="wrapper">
        <div class="sidebar">
          <ul class="nav">
            <li><a>Dashboard</a></li>
            <li><a>Charts</a></li>
            <li><a class="active">Milestones</a></li>
            <li><a>Lab</a></li>
            <li><a>Preview</a></li>
            <li><a>Assets</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
        
      </div>
        
    )
}



}

export default Lateralmenu;