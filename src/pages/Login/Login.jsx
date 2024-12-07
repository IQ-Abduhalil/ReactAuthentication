import "./login.scss";
import axios from "axios";
import { useRef } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { baseUrl } from "../../Constants";
import { TokenContext } from "../../context/GetTokenContext";
import { UseSetLocal } from "../../Hooks/UseSetLocal";
import Twitter from "../../assets/Icons/twitterlogo.svg";

export function Login() {
  const { setToken } = useContext(TokenContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(info);
    axios
      .post(`${baseUrl}/login`, info)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          UseSetLocal("my_token", res?.data?.token);
          setToken(res?.data?.token);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="login">
      <div className="login__inner">
        <img className="login__logo" src={Twitter} alt="twitter-logo" />
        <form className="login__form">
          <label className="login__label" htmlFor="email">
            <input
              className="login__input"
              ref={emailRef}
              type="text"
              placeholder="Phone number, email address"
              id="email"
            />
          </label>
          <label className="login__label" htmlFor="password">
            <input
              className="login__input"
              ref={passwordRef}
              type="password"
              placeholder="password"
              id="password"
            />
          </label>
          <Button
            onClick={handleSubmit}
            type="submit"
            htmlType="primary"
            text="Log in"
          />
        </form>
        <div className="login__bottom">
          <Link className="login__bottom-link" to="/signup">
            Forgot password?
          </Link>
          <Link className="login__bottom-link" to="/signup">
            Sign up to twitter
          </Link>
        </div>
      </div>
    </div>
  );
}
