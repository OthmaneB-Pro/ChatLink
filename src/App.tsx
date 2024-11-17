import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import Menu from "./components/pages/menu/Menu";
import Messaging from "./components/pages/messaging/Messaging";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"*"} element={<ErrorPage />} />
          <Route path={"/"} element={<LoginPage />} />
          <Route path={"/messaging"} element={<Messaging />} />
          <Route path={"/menu"} element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
