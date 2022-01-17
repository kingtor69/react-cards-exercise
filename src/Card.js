import React from 'react';

const Card = ({code, img, offset}) => {
  const cardStyle = {
    left: `${offset}px`
  }
  
  return (
    <div className="Card">
      <img 
        alt={code}
        src={img} 
        style={cardStyle} 
      />
    </div>
  )
}

export default Card;
