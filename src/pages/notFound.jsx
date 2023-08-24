import React from 'react';
import image from '../images/404.jpg';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="_container">
      <div className="not-found">
        <div className="not-found__text">
          We're sorry, but the page you were looking for doesn't exist
        </div>
        <img className="not-found__image" src={image} alt="Not found" />
      </div>
    </div>
  );
};

export default NotFound;
