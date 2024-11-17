import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import Menu from "./components/pages/menu/Menu";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"*"} element={<ErrorPage />} />
          <Route path={"/"} element={<LoginPage />} />
          <Route path={"/menu"} element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
