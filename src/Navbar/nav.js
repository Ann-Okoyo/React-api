import React from 'react';
import'./nav.css';


const Navigate = () => {
  return (
    <nav>
      <ul>
        
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/more">More</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigate;