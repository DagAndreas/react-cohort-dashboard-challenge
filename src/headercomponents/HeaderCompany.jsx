import { useContext } from "react";
import Icon from "./Icon";
import { ContactContext } from "../App";
import './HeaderCompany.css';


import Logo from "../_assets/title-header.svg?react";

function HeaderCompany() {
  const { contacts } = useContext(ContactContext);
  console.log("contacts", contacts);
  const firstcontact = contacts[0];
  console.log(firstcontact);

  return (
    <div className="header-banner">
      <Logo width="200"></Logo>
      <Icon person={firstcontact} />
    </div>
  );
}

export default HeaderCompany;
