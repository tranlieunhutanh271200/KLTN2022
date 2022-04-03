import { useState } from "react";
import { useHistory } from "react-router-dom";
import DashboardCardComponent from "../../components/dashboard-card/dashboard-card.component";
import ScheduleComponent from "../../components/schedule/schedule.component";
import { ROLE } from "../../consts/role.const";
import "./home.css";
const HomePage = () => {
  const { location } = useHistory();
  const [role, setRole] = useState(ROLE.TEACHER);
  const data = {
    1_2: [
      {
        day: "Monday",
        room: "A5-102",
        subject: "Math",
        period: "1-2",
        time: "7-7:45",
        teacher: "Luyen Ngoc Thanh",
      },
      {
        day: "Tuesday",
        room: "A5-102",
        subject: "Math",
        period: "1-2",
        time: "7-7:45",
        teacher: "Luyen Ngoc Thanh",
      },
      {},
      {
        day: "Thursday",
        room: "A5-102",
        subject: "Math",
        period: "1-2",
        time: "7-7:45",
        teacher: "Luyen Ngoc Thanh",
      },
      {},
      {
        day: "Saturday",
        room: "A5-102",
        subject: "Math",
        period: "1-2",
        time: "7-7:45",
        teacher: "Luyen Ngoc Thanh",
      },
    ],
    2_3: [
      {
        day: "Monday",
        room: "A5-102",
        subject: "Math",
        period: "1-2",
        time: "7-7:45",
        teacher: "Luyen Ngoc Thanh",
      },
      {
        day: "Tuesday",
        room: "A5-102",
        subject: "Math",
        period: "1-2",
        time: "7-7:45",
        teacher: "Luyen Ngoc Thanh",
      },
      {},
      {
      },
      {},
      {
        day: "Saturday",
        room: "A5-102",
        subject: "Math",
        period: "1-2",
        time: "7-7:45",
        teacher: "Luyen Ngoc Thanh",
      },
    ],
    3_4: [
      {
      },
      {
        day: "Tuesday",
        room: "A5-102",
        subject: "Math",
        period: "1-2",
        time: "7-7:45",
        teacher: "Luyen Ngoc Thanh",
      },
      {},
      {
        day: "Thursday",
        room: "A5-102",
        subject: "Math",
        period: "1-2",
        time: "7-7:45",
        teacher: "Luyen Ngoc Thanh",
      },
      {},
      {
        day: "Saturday",
        room: "A5-102",
        subject: "Math",
        period: "1-2",
        time: "7-7:45",
        teacher: "Luyen Ngoc Thanh",
      },
    ]
  };
  return (
    <>
      {/* card */}
      {location.pathname === "/dashboard" && (
        <div>
          {/* teacher */}
          {role === ROLE.TEACHER && (
            <DashboardCardComponent></DashboardCardComponent>
          )}
          {/* student */}
          {role === ROLE.STUDENT && (
            <div className="cardBox">
              <div className="card">
                <div>
                  <div className="numbers">1054</div>
                  <div className="cardName">Daily</div>
                </div>
                <div className="iconBox">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">1054</div>
                  <div className="cardName">Daily</div>
                </div>
                <div className="iconBox">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">1054</div>
                  <div className="cardName">Daily</div>
                </div>
                <div className="iconBox">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">1054</div>
                  <div className="cardName">Daily</div>
                </div>
                <div className="iconBox">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <ScheduleComponent data={data}></ScheduleComponent>
    </>
  );
};

export default HomePage;
