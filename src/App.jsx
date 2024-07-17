import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./components/Login/login";
import Userlist from "./components/adddeptlist/Userlist";
import SideBar from "./components/Sidebar/sidebar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/userlist" element={<Userlist />} />
          <Route path="/sidebar" element={<SideBar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
