import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import EditItem from "./pages/EditItem";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewItem from "./pages/NewItem";
import Signup from "./pages/Signup";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  // let auth = sessionStorage.getItem("auth-token");
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/addItem" element={<NewItem />} />
          <Route path="/editItem/:id" element={<EditItem />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
