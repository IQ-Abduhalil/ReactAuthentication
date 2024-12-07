import { ProfilHeader } from "../../components/ProfilHeader/ProfilHeader";
import "./profile.scss";
import { Person } from "../../components/Person/Person";
import { NewPerson } from "../../components/NewPerson/NewPerson";
import Location from "../../assets/Icons/location.svg";
import TgLink from "../../assets/Icons/tg-link.svg";
import Born from "../../assets/Icons/born-icon.svg";
import Frame from "../../assets/Icons/data-icon.svg";
import ProfilImg from "../../assets/Images/boburImg.png";
import { NavLink } from "react-router-dom";
import Designer from "../../assets/Images/designer.png";
import Designer2 from "../../assets/Images/design2.png";
import Designer3 from "../../assets/Images/photo.png";
import Shashlik from "../../assets/Images/img-shashlik.png";

export function Profile() {
  return (
    <div>
      <ProfilHeader className="profile__header" />
      <div className="profile">
        <div className="profile__inner">
          <div className="profile__info">
            <img src={ProfilImg} alt="boburimg" />
            <button className="profile__btn">edit profile</button>
          </div>
          <p className="profile__name">Bobur</p>
          <p className="profile__link">@bobur_mavlonov</p>
          <p className="profile__job">UX&UI designer at @abutechuz</p>

          <ul className="profile__list">
            <li className="profile__item">
              <img src={Location} alt="icon" />
              <p className="profile__links">Mashag’daman</p>
            </li>
            <li className="profile__item">
              <img src={TgLink} alt="icon" />
              <p className="profile__links">t.me/boburjon_mavlonov</p>
            </li>
            <li className="profile__item">
              <img src={Born} alt="icon" />
              <p className="profile__links">Born November 24, 2000</p>
            </li>
            <li className="profile__item">
              <img src={Frame} alt="icon" />
              <p className="profile__links">Joined May 2020</p>
            </li>
          </ul>
          <div className="profile__follow">
            <p className="profile__foll">
              67 <span className="profile__follows">Following</span>
            </p>
            <p className="profile__foll">
              47 <span className="profile__follows">Follows</span>
            </p>
          </div>
          <ul className="profile__bottom--list">
            <li className="profile__bottom--item">
              <NavLink
                to="#"
                className={({ isActive }) =>
                  `profile__bottom--link ${isActive ? "active" : ""}`
                }
              >
                Tweets
              </NavLink>
            </li>
            <li className="profile__bottom--item">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `profile__bottom--link ${isActive ? "active" : ""}`
                }
              >
                Tweets & replies
              </NavLink>
            </li>
            <li className="profile__bottom--item">
              <NavLink
                className={({ isActive }) =>
                  `profile__bottom--link ${isActive ? "active" : ""}`
                }
              >
                Media
              </NavLink>
            </li>
            <li className="profile__bottom--item">
              <NavLink
                className={({ isActive }) =>
                  `profile__bottom--link ${isActive ? "active" : ""}`
                }
              >
                Likes
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <Person
            text="Twitterdagi ayol-erkak qarama-qarshiliginglardan ozinglar zerikmadinglarmi"
            image={Designer}
            name="Designsta"
            time="@inner · 25m"
          />
          <Person
            text="YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam."
            image={Designer2}
            name="cloutexhibition"
            time="@RajLahoti · 22m"
          />

          <NewPerson
            text="Обетда..... 
          Кечиринглар"
            image={Designer3}
            name="CreativePhoto"
            time="@cloutexhibition · 1hm"
            newImg={Shashlik}
          />
        </div>
      </div>
    </div>
  );
}
