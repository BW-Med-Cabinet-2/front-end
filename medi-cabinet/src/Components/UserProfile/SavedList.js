import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'reactstrap'; 
import Cards from '../Cards/Cards'; 

function SavedList({ strains }) {
  return (
    <div className="saved-list">
      <h3>Saved Strains:</h3>
      {/* {strains.map(strain)} */}
      <Cards /> 
    </div>
  );
}

export default SavedList;
