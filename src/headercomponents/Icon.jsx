import React from 'react';
import './Icon.css';

function Icon(props) {
  const { person } = props;
  const { firstName, lastName, favouriteColour } = person;

  return (
    <div
      className="icon-circle"
      style={{ backgroundColor: favouriteColour }}
    >
      {firstName[0]}
      {lastName[0]}
    </div>
  );
}

export default Icon;
