import "./ChatPage.scss";
import NavBar from "../../widgets/NavBar/NavBar";
import ChatMessages from "./Chats/ChatMessages.jsx";
import OpenChat from "./OpenChat/OpenChat.jsx";

const ChatPage = () => {
  return (
    <>
      <NavBar />
      <section className="chat">
        <ChatMessages />
        <OpenChat />
      </section>
    </>
  );
};

export default ChatPage;
