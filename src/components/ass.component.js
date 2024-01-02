// src/components/HalfPage.jsx

import React from 'react';
import './App.css'; // Import your styles

const HalfPage = () => {
  return (
    <div className="half-page">
      <div className="left-half">
        {/* Content for the left half */}
        <h1>Left Half</h1>
      </div>
      <div className="right-half">
        {/* Content for the right half */}
        <h1>Right Half</h1>
      </div>
    </div>
  );
};

export default HalfPage;
