import React, { useState } from 'react';
import SavedList from './SavedList';
import Cards from '../Cards/Cards';



const Dashboard = ({ list, setSavedList }) => {
  


  return (
    <div className="Dashboard">
      <div className="Welcome">
        <h2 className="welcomeText">Welcome to your Dashboard!</h2>
      </div>
      <SavedList savedList={list} setSavedList={setSavedList}/>
    </div>
  );

}

export default Dashboard;





