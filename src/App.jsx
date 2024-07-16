import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./components/Login/login";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
