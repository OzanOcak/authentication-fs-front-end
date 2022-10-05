import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LogInPage } from "./pages/LogInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { UserInfoPage } from "./pages/UserInfoPage";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<UserInfoPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
