import Logo from "../_assets/Profile-icon.svg?react";
import "./HomeButton.css";

function ProfileButton() {
  return (
    <div className="home-button">
      <Logo />
      <p>Profile</p>
    </div>
  );
}

export default ProfileButton;
