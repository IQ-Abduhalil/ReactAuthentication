import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Profile } from "./pages/Profile/Profile";
import { Signup } from "./pages/Signup/Signup";
import { NoPage } from "./pages/Nopage/NoPage";
import { useContext } from "react";
import { TokenContext } from "./context/GetTokenContext";
import { Layout } from "./pages/Layout/Layout";

function App() {
  const { token } = useContext(TokenContext);
  if (token) {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    );
  }
}

export default App;
