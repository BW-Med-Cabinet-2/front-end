import React from 'react'; 
import NavBar from '../NavBar';
import SavedList from './SavedList';



export default function Dashboard() {


    return (
        <div className="Dashboard">
          <header>
            <NavBar />
          </header>
          <div className="Welcome">  
             <h2>Welcome Username!</h2>
          </div>
          <SavedList /> 
        </div>
      );

}





