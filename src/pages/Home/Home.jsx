import "./home.scss";
import Customize from "../../assets/Icons/Customize.svg";
import { Button } from "../../components/Button/Button";
import Gif from "../../assets/Icons/gif.svg";
import Smile from "../../assets/Icons/smile.svg";
import Liner from "../../assets/Icons/liner.svg";
import Image from "../../assets/Icons/images.svg";
import Schedule from "../../assets/Icons/schedule.svg";
import Bobur from "../../assets/Images/Bobur.png";
import Designer from "../../assets/Images/designer.png";
import Designer2 from "../../assets/Images/design2.png";
import Designer3 from "../../assets/Images/photo.png";
import Shashlik from "../../assets/Images/img-shashlik.png";
import { Link } from "react-router-dom";
import { Person } from "../../components/Person/Person";
import { NewPerson } from "../../components/NewPerson/NewPerson";

export function Home() {
  return (
    <section className="home">
      <div className="home__header">
        <p className="home__title">Home</p>
        <img src={Customize} alt="stars" />
      </div>
      <div className="home__hero">
        <Link to="/profile" className="home__hero--person">
          <img src={Bobur} alt="bobur-image" />
          <p className="home__hero--name">What’s happening</p>
        </Link>

        <div className="home__hero--infos">
          <ul className="home__hero--list">
            <li className="home__hero--item">
              <img src={Image} alt="image" />
            </li>
            <li className="home__hero--item">
              <img src={Gif} alt="gif-image" />
            </li>
            <li className="home__hero--item">
              <img src={Smile} alt="smaile-image" />
            </li>
            <li className="home__hero--item">
              <img src={Schedule} alt="schedule-image" />
            </li>
            <li className="home__hero--item">
              <img src={Liner} alt="liner-mage" />
            </li>
          </ul>
          <Button type="button" htmlType="primary" text="Tweet" />
        </div>
      </div>
      <div className="home__bottom">
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
    </section>
  );
}
