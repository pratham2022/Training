import { Routes, Route } from "react-router-dom";
import "./App.css";
import ShowInvitation from "./Invitation/ShowInvitation";
import Login from "./Login/Login";




function App() {
  return (
    <div>
      {/* <Login/>
      <ShowInvitation/> */}
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/invite" element={<ShowInvitation />} />

      </Routes>
    </div>
  );
}

export default App;
