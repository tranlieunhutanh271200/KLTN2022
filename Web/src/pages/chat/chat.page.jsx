import { useState } from "react";
import PaginationComponent from "../../components/pagination/pagination.component";
import "./chat.css";
function ChatPage() {
  const [users, setUsers] = useState([]); //Previous chat users
  const [message, setMessage] = useState("");
  const [currentChat, setCurrentChat] = useState({});
  const send = (e) => {
    e.preventDefault();
    //Send messsage using signalR
  };
  const select = (user) => {
    setCurrentChat(user);
  };
  return (
    <div className="chat_page">
      <div className="group">
        <div className="users">
          <div className="search_box">
            <input
              type="text"
              placeholder="Search chat"
              name="search"
              autoSave="false"
              autoComplete="false"
            />
            <ion-icon size="large" name="search-outline"></ion-icon>
          </div>
          <ul>
            <li className="active">
              <img
                className="avatar"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="avatar"
              />
              <span className="chat-detail">
                <div className="name">Thanh</div>
                <p className="last_message">Chao em</p>
              </span>
            </li>
            <li>
              <img
                className="avatar"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="avatar"
              />
              <span className="chat-detail">
                <div className="name">Thanh</div>
                <p className="last_message">Chao em</p>
              </span>
            </li>
            <li>
              <img
                className="avatar"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="avatar"
              />
              <span className="chat-detail">
                <div className="name">Thanh</div>
                <p className="last_message">Chao em</p>
              </span>
            </li>
            <li>
              <img
                className="avatar"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="avatar"
              />
              <span className="chat-detail">
                <div className="name">Thanh</div>
                <p className="last_message">Chao em</p>
              </span>
            </li>
            <li>
              <img
                className="avatar"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="avatar"
              />
              <span className="chat-detail">
                <div className="name">Thanh</div>
                <p className="last_message">Chao em 213131321321</p>
              </span>
            </li>
          </ul>
        </div>
        <div className="chatbox">
          <div className="current_user">
            <img
              className="avatar"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatar"
            />
            <h4>Thanh</h4>
          </div>
          <div className="chat_area">
            {[...Array(8).keys()].map((val) => (
              <div key={val} className={`cover  ${
                val % 2 === 0 ? "receive" : "send"
              }`}>
                <div className={`bubble_chat`}>
                  123
                </div>
              </div>
            ))}
          </div>
          <div className="type">
            <textarea
              onChange={(r) => setMessage(r.target.value)}
              name="Text1"
              cols="40"
              rows="1"
              placeholder="Enter your message here"
            ></textarea>
            <button onClick={(e) => send(e)}>
              <ion-icon name="send-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
