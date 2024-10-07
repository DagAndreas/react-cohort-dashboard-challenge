import { useNavigate } from "react-router-dom";
import Logo from "../_assets/Profile-icon.svg?react";
import "./HomeButton.css";

function ProfileButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact/1");
  };

  return (
    <div className="home-button" onClick={handleClick}>
      <Logo />
      <p>Profile</p>
    </div>
  );
}

export default ProfileButton;
