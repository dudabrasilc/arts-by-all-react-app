import React from 'react';

function ArtCard({ name, image }) { 
  return (
    <div className="card">
      <img src={image} alt={"art name"} />
      <h3 className="art-name">"{name}"</h3>
    </div>
  )
}
  
export default ArtCard;
