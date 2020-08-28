import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'reactstrap'; 
import Cards from '../Cards/Cards'; 

function SavedList({ list }) {
  return (
    <div className="saved-list">
      <h3>Saved Strains:</h3>
        {/* local storage container with saved strains */}
        {/* {list.map(strain => {
          return <span>{strain.name}</span>
        })} */}
    </div>
  );
}

export default SavedList;
