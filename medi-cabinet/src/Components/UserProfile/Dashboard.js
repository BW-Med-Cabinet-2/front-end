import React, { useState } from 'react';
import SavedList from './SavedList';
import Cards from '../Cards/Cards';



const Dashboard = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = strain => {
    setSavedList([...savedList, strain])
  };


  return (
    <div className="Dashboard">
      <div className="Welcome">
        <h2 className="welcomeText">Welcome to your Dashboard!</h2>
      </div>
      <SavedList addToSavedList={addToSavedList} />
    </div>
  );

}

export default Dashboard;





