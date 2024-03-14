import React from 'react';
import '../Styles/Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
     
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navigation;
