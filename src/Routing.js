import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserInfoPage } from "./pages/UserInfoPage";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
