import { Routes, Route } from "react-router-dom";
import "./App.css";
import ShowInvitation from "./Invitation/ShowInvitation";
import Login from "./Login/Login";
import Nav from "./NavBar/Nav";

function App() {
  return (
    <div>
      {/* <Login/>
      <ShowInvitation/> */}
      <Nav />
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/invite" element={<ShowInvitation />} />
      </Routes>
    </div>
  );
}

export default App;
