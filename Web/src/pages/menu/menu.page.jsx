import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiOutlineDatabase } from "react-icons/hi";
import { MdOutlineManageAccounts } from "react-icons/md";
import "./menu.css";
const MenuPage = () => {
  const { location } = useHistory();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isOtherOpen, setIsOtherOpen] = useState(false);
  const otherMenuRef = useRef();
  const ignoreClickOnMeElement = document.getElementById("app");
  ignoreClickOnMeElement.addEventListener("click", () => {
    if (isOtherOpen) {
      setIsOtherOpen(false);
    }
  });
  return (
    <>
      <div className="search-box">
        <input
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          className="search-input"
          type="text"
        />
        <span className={isSearchFocused ? "d-none" : ""}>
          <ion-icon name="search-outline"></ion-icon>
          <div>Search</div>
        </span>
      </div>
      <div
        className="menu-page"
        onClick={() => {
          if (isOtherOpen) {
            setIsOtherOpen(false);
          }
        }}
      >
        <div className="menu">
          <div className="component">
            <Link to={`${location.pathname}/ticket`}>
              <span>
                <ion-icon className="icon" name="ticket-outline"></ion-icon>
              </span>
            </Link>
            <h4>Ticket</h4>
          </div>
          <div className="component">
            <Link to={`${location.pathname}/jira`}>
              <span>
                <ion-icon className="icon" name="checkbox-outline"></ion-icon>
              </span>
            </Link>
            <h4>Log work</h4>
          </div>
          <div className="component">
            <Link to={`${location.pathname}/log-work`}>
              <span>
              <ion-icon name="clipboard-outline"></ion-icon>
              </span>
            </Link>
            <h4>Log work</h4>
          </div>
          <div className="component">
            <Link to={`${location.pathname}/chat`}>
              <span>
                <ion-icon className="icon" name="chatbubble-outline"></ion-icon>
              </span>
            </Link>
            <h4>Chat</h4>
          </div>
          <div className="component">
            <Link to={`${location.pathname}/attendance`}>
              <span>
                <ion-icon className="icon" name="checkbox-outline"></ion-icon>
              </span>
            </Link>
            <h4>Attendance</h4>
          </div>
          <div className="component">
            <Link
              to={`${location.pathname}`}
              onClick={() => setIsOtherOpen(!isOtherOpen)}
            >
              <span>
                <MdOutlineManageAccounts className="icon"></MdOutlineManageAccounts>
              </span>
            </Link>
            <h4>Manage</h4>
          </div>
        </div>
        {isOtherOpen && (
          <div ref={otherMenuRef} className="other-menu">
            <div className="component">
              <Link to={`${location.pathname}/subject`}>
                <span>
                  <MdOutlineManageAccounts className="icon"></MdOutlineManageAccounts>
                </span>
              </Link>
              <h4>Subject</h4>
            </div>
            <div className="component">
              <Link to={`${location.pathname}/questions`}>
                <span>
                  <HiOutlineDatabase className="icon"></HiOutlineDatabase>
                </span>
              </Link>
              <h4>Question bank</h4>
            </div>
            <div className="component">
              <Link to={`${location.pathname}/questions`}>
                <span>
                  <HiOutlineDatabase className="icon"></HiOutlineDatabase>
                </span>
              </Link>
              <h4>Question bank</h4>
            </div>
            <div className="component">
              <Link to={`${location.pathname}/questions`}>
                <span>
                  <HiOutlineDatabase className="icon"></HiOutlineDatabase>
                </span>
              </Link>
              <h4>Question bank</h4>
            </div>
            <div className="component">
              <Link to={`${location.pathname}/questions`}>
                <span>
                  <HiOutlineDatabase className="icon"></HiOutlineDatabase>
                </span>
              </Link>
              <h4>Question bank</h4>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MenuPage;
