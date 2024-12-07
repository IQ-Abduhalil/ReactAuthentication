import "./layout.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { SideLink } from "../../components/sideLink/SideLink";
import HomeIcon from "../../assets/Icons/home-icon.svg";
import SharpIcon from "../../assets/Icons//sharp.svg";
import NotificationbIcon from "../../assets/Icons/notification.svg";
import Message from "../../assets/Icons/messages.svg";
import Bookmarke from "../../assets/Icons/bookmarks.svg";
import Lists from "../../assets/Icons/lists.svg";
import Profile from "../../assets/Icons/profile-icon.svg";
import More from "../../assets/Icons/more.svg";
import twitterLogo from "../../assets/Icons/twitterlogo.svg";
import { Button } from "../../components/Button/Button";
import SettingsIcon from "../../assets/Icons/settings.svg";
import { ProfileLink } from "../../components/ProfileLink/ProfileLink";
import Mushtariy from "../../assets/Images/mushtar.png";
import Shuhrat from "../../assets/Images/shuhrat.png";
import { useContext } from "react";
import { TokenContext } from "../../context/GetTokenContext";

export function Layout() {
  const { setToken } = useContext(TokenContext);
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/");
  };

  const handleLogOut = () => {
    setToken(window.localStorage.removeItem("my_token"));
  };
  return (
    <div className="container">
      <div className="layout">
        <div className="layout__left">
          <Link to="/">
            <img
              className="layout__left-logo"
              src={twitterLogo}
              alt="twitterLogo"
            />
          </Link>
          <div className="layout__sidebar">
            <SideLink link="/" img={HomeIcon} title="Home" />
            <SideLink link="/explore" img={SharpIcon} title="Explore" />
            <SideLink
              link="/notification"
              img={NotificationbIcon}
              title="Notification"
            />
            <SideLink link="/message" img={Message} title="Messages" />
            <SideLink link="/bookmarke" img={Bookmarke} title="Bookmarks" />
            <SideLink link="/lists" img={Lists} title="Lists" />
            <SideLink link="/profile" img={Profile} title="Profile" />
            <SideLink link="/more" img={More} title="More" />
          </div>
          <Button
            onClick={handleNav}
            text="Tweet"
            type="button"
            htmlType="primary"
          />
        </div>
        <Outlet className="layout__outlet" />
        <div className="layout__right">
          <form className="layout__form">
            <label className="layout__label" htmlFor="input">
              <input
                className="layout__input"
                id="input"
                type="text"
                placeholder="Search tweet"
              />
            </label>
          </form>
          <div className="layout__right-lists">
            <div className="layout__right-item">
              <p className="layout__right--title">Trends for you</p>
              <img src={SettingsIcon} alt="more" />
            </div>

            <div className="layout__right-item">
              <div className="layout__right--inner">
                <p className="layout__right--text">Trending in Germany</p>
                <p className="layout__right--name">Revolution</p>
                <p className="layout__right--text">50.4K Tweets</p>
              </div>
              <img src={More} alt="more" />
            </div>

            <div className="layout__right-item">
              <div className="layout__right--inner">
                <p className="layout__right--text">Trending in Germany</p>
                <p className="layout__right--name">Revolution</p>
                <p className="layout__right--text">50.4K Tweets</p>
              </div>
              <img src={More} alt="more" />
            </div>

            <div className="layout__right-item">
              <div className="layout__right--inner">
                <p className="layout__right--text">Trending in Germany</p>
                <p className="layout__right--name">Revolution</p>
                <p className="layout__right--text">50.4K Tweets</p>
              </div>
              <img src={More} alt="more" />
            </div>
            <Link className="layout__right--link">Show more</Link>
          </div>
          <div className="layout__right--likes">
            <p className="layout__right--liketitle">You might like</p>
            <ProfileLink
              img={Mushtariy}
              name="Mushtariy"
              email="@Mushtar5656"
            />
            <ProfileLink img={Shuhrat} name="Shukhratbek" email="@Shukhrat" />
            <Link className="layout__right--link">Show More</Link>
          </div>
          <div className="layout__right--bottom">
            <p className="layout__right--bottomtext">
              Terms of Service Privacy Policy Cookie Policy
            </p>
            <p className="layout__right--bottomtext">
              Imprint Ads Info More ··· © 2021 Twitter, Inc.
            </p>
          </div>
          <Button
            onClick={handleLogOut}
            text="Log out"
            type="button"
            htmlType="primary"
          />
        </div>
      </div>
    </div>
  );
}
