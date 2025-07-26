import NavBar from "../../widgets/NavBar/NavBar";
import ChatAside from "./ChatAside/ChatAside";
import ChatMessages from "./Chats/ChatMessages.jsx";
import "./ChatPage.scss";

const ChatPage = () => {
  return (
    <>
      <NavBar />
      <div className="chat">
        <ChatAside />
        <ChatMessages />
        <div className="chat__open"></div>
      </div>
    </>
  );
};

export default ChatPage;
