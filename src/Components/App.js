import NavbarComponent from "./NavbarComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useFireContext } from "../Context";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Welcome from "./Welcome";

function App() {
  const { user, admin } = useFireContext();
  return (
    <>
      <Router>
        {user ? (
          <>
            <NavbarComponent />;
            <Routes>
              <Route path="/" element={<Profile />} />
            </Routes>
          </>
        ) : (
          <>
            <Welcome />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
