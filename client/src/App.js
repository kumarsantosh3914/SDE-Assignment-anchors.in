import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Post from "./components/Post/Post";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
