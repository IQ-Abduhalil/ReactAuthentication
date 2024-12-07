import "./signup.scss";
import { Link } from "react-router-dom";
import Twitter from "../../assets/Images/back-twitter.png";
import twitterLogo from "../../assets/Icons/twitterlogo.svg";
import GoogleLogo from "../../assets/Icons/google-icon.svg";
import AppleLogo from "../../assets/Icons/logo-apple.svg";

export function Signup() {
  return (
    <section className="signup">
      <div className="signup__inner">
        <div className="signup__left">
          <img className="signup__left-img" src={Twitter} alt="twitter" />
        </div>
        <div className="signup__right">
          <img
            className="signup__right-img"
            src={twitterLogo}
            alt="logo-twitter"
          />
          <p className="signup__title">Happening now</p>
          <p className="signup__text">Join Twitter today</p>
          <ul className="signup__btn-list">
            <li className="signup__btn-item">
              <Link className=" signup__btn-link signup__btn-google">
                <img
                  className="signup__btn-logo"
                  src={GoogleLogo}
                  alt="google"
                />
                Sign up with google
              </Link>
            </li>
            <li className="signup__btn-item">
              <Link className=" signup__btn-link signup__btn-google">
                <img
                  className="signup__btn-logo"
                  src={AppleLogo}
                  alt="google"
                />
                Sign up with Apple
              </Link>
            </li>
            <li className="signup__btn-item">
              <Link className=" signup__btn-link signup__btn-google">
                Sign up with phone or email
              </Link>
            </li>
          </ul>

          <p className="signup__right-text">
            By singing up you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>
          <p className="signup__right-text signup__right-bottomtext">
            Already have an account? Log in
          </p>
        </div>
      </div>
      <div className="signup__footer">
        <ul className="signup__footer-list">
          <li className="signup__footer-item">About</li>
          <li className="signup__footer-item">Help Center</li>
          <li className="signup__footer-item">Terms of Service</li>
          <li className="signup__footer-item">Privacy Policy</li>
          <li className="signup__footer-item">Cookie Policy</li>
          <li className="signup__footer-item">Ads info</li>
          <li className="signup__footer-item">Blog</li>
          <li className="signup__footer-item">Status</li>
          <li className="signup__footer-item">Carrres</li>
          <li className="signup__footer-item">Brand Resources</li>
          <li className="signup__footer-item">Advertsing</li>
          <li className="signup__footer-item">Marketing</li>
          <li className="signup__footer-item">Twitter for Business</li>
          <li className="signup__footer-item">Developers</li>
          <li className="signup__footer-item">Directory</li>
          <li className="signup__footer-item">Settings</li>
          <li className="signup__footer-item">© 2021 Twitter, Inc.</li>
        </ul>
      </div>
    </section>
  );
}
