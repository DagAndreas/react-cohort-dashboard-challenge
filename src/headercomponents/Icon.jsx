import React from "react";
import "./Icon.css";
import { useNavigate } from "react-router-dom";

function Icon(props) {
  const { person } = props;
  const { firstName, lastName, favouriteColour } = person;

  const navigator = useNavigate();

  const clicked = (event) =>  {
    console.log("pressed icon of ", person.firstName, " going to id:", person.id);
    navigator(`/contact/${person.id}`)
    
  }
  return (
    <>
      <div onClick= {(event) => clicked(event)} className="icon-circle" style={{ backgroundColor: favouriteColour }}>
        {firstName[0]}
        {lastName[0]}
      </div>
    </>
  );
}

export default Icon;
