import "./person.scss";
import More from "../../assets/Icons/more.svg";
import Comment from "../../assets/Icons/comment.svg";
import Return from "../../assets/Icons/return.svg";
import Like from "../../assets/Icons/like.svg";
import Frame from "../../assets/Icons/download.svg";
import Statist from "../../assets/Icons/liner.svg";

export function Person({ image, name, text, time }) {
  return (
    <div className="person">
      <div className="person__in">
        <div className="person__inner">
          <img src={image} alt="person-img" />
          <div className="person__infos">
            <p className="person__name">
              {name} <span className="person__text person__time">{time}</span>
            </p>
            <p className="person__text">{text}</p>
          </div>
        </div>
        <img src={More} alt="person-img" />
      </div>
      <ul className="person__list">
        <li className="person__item">
          <img src={Comment} alt="comment" />
        </li>
        <li className="person__item">
          <img src={Return} alt="return" />
        </li>
        <li className="person__item">
          <img src={Like} alt="like" />
        </li>
        <li className="person__item">
          <img src={Frame} alt="frame" />
        </li>
        <li className="person__item">
          <img src={Statist} alt="Statistika" />
        </li>
      </ul>
    </div>
  );
}
