import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import ChatPage from "./pages/ChatPage/ChatPage.jsx";
import PreloaderPage from "./pages/PreloaderPage/PreloaderPage.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PreloaderPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </>
  );
};

export default App;
