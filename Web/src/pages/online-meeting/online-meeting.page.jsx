import { useState } from "react";
import "./online-meeting.css";
const OnlineMeetingPage = () => {
  const [isHost, setIsHost] = useState(true);
  const [participants, setParticipants] = useState([]);
  return (
    <div className="online-meeting">
      <div className="main-screen">
        <div className="stream-screen"></div>
        <div className="stream-config">
          <ion-icon name="play-circle-outline"></ion-icon>
          <ion-icon name="recording-outline"></ion-icon>
          <ion-icon name="stop-circle-outline"></ion-icon>
        </div>
      </div>

      <div className="participants">participants</div>
    </div>
  );
};

export default OnlineMeetingPage;
