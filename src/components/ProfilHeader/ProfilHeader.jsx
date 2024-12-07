import "./profil-header.scss";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/Icons/Arrow-icon.svg";

export function ProfilHeader() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="profilheader">
      <button className="profilheader__btn" onClick={handleBack}>
        <img src={backIcon} alt="back" />
      </button>
      <div className="profilheader__inner">
        <p className="profilheader__title">Bobur</p>
        <p className="profilheader__text">1,070 Tweets</p>
      </div>
    </div>
  );
}
