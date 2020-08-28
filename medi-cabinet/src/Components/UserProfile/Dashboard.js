import React, { useState } from 'react';
import SavedList from './SavedList';
import Cards from '../Cards/Cards';



const Dashboard = ({ list }) => {
  


  return (
    <div className="Dashboard">
      <div className="Welcome">
        <h2 className="welcomeText">Welcome to your Dashboard!</h2>
      </div>
      <SavedList list={list}/>
    </div>
  );

}

export default Dashboard;





