import Logo from "../_assets/Home-icon.svg?react";
import "./HomeButton.css";

function HomeButton() {
  return (
    <div className="home-button">
      <Logo />
      <p>Home</p>
    </div>
  );
}

export default HomeButton;
