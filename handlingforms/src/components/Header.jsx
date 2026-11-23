import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
   return (
    <nav>
      <Link to="/">ShopEase</Link>

      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/practice1">Practice1</Link>
      <Link to="/practice2">Practice2</Link>
      <Link to="/practice3">Practice3</Link>
      <Link to="/timer">Timer</Link>
    </nav>
  );
}

export default Header