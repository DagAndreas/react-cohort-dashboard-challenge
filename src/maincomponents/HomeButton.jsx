import { useNavigate } from "react-router-dom";
import Logo from "../_assets/Home-icon.svg?react";
import "./HomeButton.css";

function HomeButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="home-button" onClick={handleClick}>
      <Logo />
      <p>Home</p>
    </div>
  );
}

export default HomeButton;
