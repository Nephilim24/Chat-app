import "./ChatMessages.scss";
const ChatMessages = () => {
  return (
    <div className="chats">
      <h2>Messages</h2>

      <div className="chats-search">
        <div className="chats-input">
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8947 14H16.0632L15.7684 13.73C16.8 12.59 17.4211 11.11 17.4211 9.5C17.4211 5.91 14.3579 3 10.579 3C6.80001 3 3.73685 5.91 3.73685 9.5C3.73685 13.09 6.80001 16 10.579 16C12.2737 16 13.8316 15.41 15.0316 14.43L15.3158 14.71V15.5L20.579 20.49L22.1474 19L16.8947 14V14ZM10.579 14C7.9579 14 5.84211 11.99 5.84211 9.5C5.84211 7.01 7.9579 5 10.579 5C13.2 5 15.3158 7.01 15.3158 9.5C15.3158 11.99 13.2 14 10.579 14Z"
              fill="#ADADAD"
            />
          </svg>
          <input type="text" placeholder="Поиск чата" />
        </div>
        <button>chat +</button>
      </div>

      <ul className="chats-list">
        <li>
          <img className="chats-list-img" src="" alt="chat-photo" />
          <div className="chats-list-name">
            <h4>Suporte ADMIN</h4>
            <h5>Pesquisar chat</h5>
          </div>
          <div className="chats-list-info">
            <p>Espera</p>
            <span>00:31:00</span>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5V19L19 12L8 5Z" fill="#5D5FEF" />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default ChatMessages;
