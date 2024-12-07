import "./newperson.scss";
import More from "../../assets/Icons/more.svg";
import Comment from "../../assets/Icons/comment.svg";
import Return from "../../assets/Icons/return.svg";
import Like from "../../assets/Icons/like.svg";
import Frame from "../../assets/Icons/download.svg";
import Statist from "../../assets/Icons/liner.svg";

export function NewPerson({ image, name, text, time, newImg }) {
  return (
    <div className="newperson">
      <div className="newperson__in">
        <div className="newperson__inner">
          <img src={image} alt="person-img" />
          <div className="newperson__infos">
            <p className="newperson__name">
              {name}{" "}
              <span className="newperson__text person__time">{time}</span>
            </p>
            <p className="newperson__text">{text}</p>
          </div>
        </div>
        <img src={More} alt="person-img" />
      </div>
      <img className="newperson__image" src={newImg} alt="image" />
      <ul className="newperson__list">
        <li className="newperson__item">
          <img src={Comment} alt="comment" />
        </li>
        <li className="newperson__item">
          <img src={Return} alt="return" />
        </li>
        <li className="newperson__item">
          <img src={Like} alt="like" />
        </li>
        <li className="newperson__item">
          <img src={Frame} alt="frame" />
        </li>
        <li className="newperson__item">
          <img src={Statist} alt="Statistika" />
        </li>
      </ul>
    </div>
  );
}
