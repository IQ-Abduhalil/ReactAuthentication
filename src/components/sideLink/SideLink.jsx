import { NavLink } from "react-router-dom";
import "./side-link.scss";

export function SideLink({ title, link, img }) {
  return (
    <>
      <NavLink
        to={link}
        className={({ isActive }) => `sidelink ${isActive ? "active" : ""}`}
      >
        <img className="sidelink__img" src={img} alt="link" />
        <p className="sidelink__title">{title}</p>
      </NavLink>
    </>
  );
}
