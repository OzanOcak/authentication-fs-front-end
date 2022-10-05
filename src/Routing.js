import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LogInPage } from "./pages/LogInPage";
import { UserInfoPage } from "./pages/UserInfoPage";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<UserInfoPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </BrowserRouter>
  );
};
