import React, { useState } from 'react';
import '../App.css';

const Card = ({ question, answer, flipped, setFlipped }) => {

  return (
    <div 
      className={`card-container ${flipped ? 'flipped' : ''}`} 
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card">
        <div className="card-front">
          <p>{question}</p>
        </div>
        <div className="card-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
