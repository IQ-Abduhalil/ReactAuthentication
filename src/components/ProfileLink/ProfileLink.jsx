import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./profile-link.scss";

export function ProfileLink({ img, name, email }) {
  return (
    <>
      <div className="profilelink">
        <div className="profilelink__inner">
          <Link className="profilelink__link" to="/profile">
            <img className="profilelink__img" src={img} alt="img" />
          </Link>
          <div className="profilelink__names">
            <p className="profilelink__name">{name}</p>
            <p className="profilelink__email">{email}</p>
          </div>
        </div>
        <Button text="Follow" htmlType="secondary" type="button" />
      </div>
    </>
  );
}
