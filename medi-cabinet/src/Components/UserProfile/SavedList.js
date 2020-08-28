import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'reactstrap'; 
import Cards from '../Cards/Cards'; 

function SavedList({ savedList, setSavedList }) {
  return (
    <div className="saved-list">
      <h3>Saved Strains:</h3>
        <Cards savedList={savedList} setSavedList={setSavedList}/>
    </div>
  );
}

export default SavedList;
