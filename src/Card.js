import React from 'react';

const Card = ({code, img, offset}) => {
  return (
    <div className="Card">
      <img 
        alt={code}
        src={img} 
        style={{left: offset}}
      />
    </div>
  )
}

export default Card;
