import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import EditItem from "./pages/EditItem";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewItem from "./pages/NewItem";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addItem" element={<NewItem />} />
        <Route path="/editItem" element={<EditItem />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
