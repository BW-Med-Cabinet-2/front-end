import React from 'react'; 
import SavedList from './SavedList';
import Cards from '../Cards/Cards';



export default function Dashboard() {


    return (
        <div className="Dashboard">
          <div className="Welcome">  
             <h2 className="welcomeText">Welcome Username!</h2>
          </div>
          <SavedList /> 
          <Cards />
        </div>
      );

}





