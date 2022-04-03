import { useEffect, useRef, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { ROLE } from "../../consts/role.const";
import ChatPage from "../../pages/chat/chat.page";
import HomePage from "../../pages/home/home.page";
import LearnDetailPage from "../../pages/learn/learn-detail/learn-detail.page";
import LearnPage from "../../pages/learn/learn.page";
import OnlineMeetingPage from "../../pages/online-meeting/online-meeting.page";
import SchedulePage from "../../pages/schedule/schedule.page";
import CalendarComponent from "../calendar/calendar.component";
import FooterComponent from "../footer/footer.component";
import LoadingComponent from "../loading/loading.component";
import ScheduleComponent from "../schedule/schedule.component";
import BreadcrumbComponent from "../breadcumb/breadcrumb.component";
import TicketPage from "../../pages/ticket/ticket.page";
import ScheduleManagePage from "../../pages/manage/schedule-manage/schedule-manage.page";
const WrapperComponent = ({ component }) => {
  const navItemRef = useRef();
  const sideNavRef = useRef();
  const mainRef = useRef();
  const { location } = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  let { url, path } = useRouteMatch();
  useEffect(() => {
    navItemRef.current.childNodes?.forEach((child, idx) => {
      if (idx !== 0) {
        child.addEventListener("click", () => {
          navItemRef.current.childNodes?.forEach((t, i) => {
            if (i !== 0) {
              t.classList.remove("active");
            }
          });
          child.classList.add("active");
          setIsLoading(true);
        });

        const url = new URL(child.firstChild.href);
        const pathname = url.pathname; // contains "/register"
        if (pathname === location.pathname) {
          child.classList.add("active");
        }
      }
    });
  }, []);

  const toggleMenu = () => {
    sideNavRef.current.classList.toggle("collapsed");
    mainRef.current.classList.toggle("collapsed");
  };
  return (
    <div className="wrapper-container">
      <div className="wrapper">
        <div className="side-navigation collapsed" ref={sideNavRef}>
          <ul ref={navItemRef}>
            <li>
              <Link to={`${url}`}>
                <span className="icon">
                  <ion-icon size="large" name="logo-apple"></ion-icon>
                </span>
                <span className="title">LMS</span>
              </Link>
            </li>
            <li>
              <Link to={`${url}`}>
                <span className="icon">
                  <ion-icon size="large" name="home-outline"></ion-icon>
                </span>
                <span className="title">Home</span>
              </Link>
            </li>
            <li>
              <Link to={`${url}/schedule`}>
                <span className="icon">
                  <ion-icon
                    size="large"
                    name="calendar-number-outline"
                  ></ion-icon>
                </span>
                <span className="title">Schedule</span>
              </Link>
            </li>
            <li>
              <Link to={`${url}/ticket`}>
                <span className="icon">
                  <ion-icon size="large" name="ticket-outline"></ion-icon>
                </span>
                <span className="title">Ticket</span>
              </Link>
            </li>
            <li>
              <Link to={`${url}/chat`}>
                <span className="icon">
                  <ion-icon size="large" name="chatbubble-outline"></ion-icon>
                </span>
                <span className="title">Chat</span>
              </Link>
            </li>
            <li>
              <Link to={`${url}/learn`}>
                <span className="icon">
                  <ion-icon size="large" name="help-outline"></ion-icon>
                </span>
                <span className="title">Learn</span>
              </Link>
            </li>
            <li>
              <Link to={`${url}/settings`}>
                <span className="icon">
                  <ion-icon size="large" name="settings-outline"></ion-icon>
                </span>
                <span className="title">Settings</span>
              </Link>
            </li>
            <li>
              <Link to={`${url}/scheduler`}>
                <span className="icon">
                  <ion-icon size="large" name="log-out-outline"></ion-icon>
                </span>
                <span className="title">Scheduler</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* main */}
        <div className="main collapsed" ref={mainRef}>
          <div className="topbar">
            <div className="toggle" onClick={toggleMenu}>
              <ion-icon size="large" name="menu-outline"></ion-icon>
            </div>
            {/* search */}
            <div className="search">
              <label htmlFor="">
                <input type="text" name="" id="" placeholder="search here" />
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div>
            <div className="info">
              <div className="notify">
                <ion-icon size="large" name="notifications-outline"></ion-icon>
              </div>
              <div className="message">
                <ion-icon size="large" name="chatbubble-outline"></ion-icon>
              </div>
              <div className="user">
                <ion-icon size="large" name="person-circle-outline"></ion-icon>
              </div>
            </div>
          </div>

          <div className="app">
            {isLoading && (
              <LoadingComponent
                type={"circle"}
                timelapse={1500}
                end={setIsLoading}
              ></LoadingComponent>
            )}
            {!isLoading && (
              <>
                <BreadcrumbComponent></BreadcrumbComponent>
                <Switch>
                  <Route exact path={`${path}`}>
                    <HomePage></HomePage>
                  </Route>
                  <Route path={`${path}/schedule`}>
                    <SchedulePage></SchedulePage>
                  </Route>
                  <Route path={`${path}/ticket`}>
                    <TicketPage></TicketPage>
                  </Route>
                  <Route path={`${path}/chat`}>
                    <ChatPage></ChatPage>
                  </Route>
                  <Route path={`${path}/learn`}>
                    <Switch>
                      <Route path={`${path}/learn`} exact>
                        <LearnPage></LearnPage>
                      </Route>
                      <Route path={`${path}/learn/:id/detail`}>
                        <Switch>
                          <Route path={`${path}/learn/:id/detail`} exact>
                            <LearnDetailPage></LearnDetailPage>
                          </Route>
                          <Route path={`${path}/learn/:id/detail/online`}>
                            <OnlineMeetingPage></OnlineMeetingPage>
                          </Route>
                        </Switch>
                      </Route>
                    </Switch>
                  </Route>
                  <Route path={`${path}/scheduler`}>
                    <ScheduleManagePage></ScheduleManagePage>
                  </Route>
                </Switch>
              </>
            )}
          </div>
          <FooterComponent></FooterComponent>
        </div>
      </div>
    </div>
  );
};

export default WrapperComponent;
