import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./component/Profile";
import Login from "./component/Login";
import Gallery from "./component/Gallery";
// import Logout from "./component/Logout";
import Home from "./component/Home";
import Logout from "./component/Logout";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={< Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
