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
import FooterComponent from "../footer/footer.component";
import LoadingComponent from "../loading/loading.component";
import BreadcrumbComponent from "../breadcumb/breadcrumb.component";
import TicketPage from "../../pages/ticket/ticket.page";
import JiraPage from "../../pages/jira/jira.page";
import MenuPage from "../../pages/menu/menu.page";
import AttendancePage from "../../pages/attendance/attendance.page";
import SubjectManagePage from "../../pages/manage/subject-manage/subject-manage.page";
import LogworkPage from "../../pages/logwork/logwork.page";
const WrapperComponent = ({ component }) => {
  const navItemRef = useRef();
  const sideNavRef = useRef();
  const mainRef = useRef();
  const { location } = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const footerRef = useRef();
  const [menuPosition, setMenuPosition] = useState({
    x: 23,
    y: 5,
  });
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
        console.log(pathname);

        var currPathSeg = pathname.split("/");
        var linkPathSeg = location.pathname.split("/");

        child.classList.remove('active');
        if (currPathSeg.length === 2) {
          if (pathname === location.pathname) {
            child.classList.add("active");
          }
        } else {
          let flag = true;
          currPathSeg.forEach((seg, idx) => {
            if (seg !== linkPathSeg[idx]) {
              flag = false;
            }
          });
          if (flag) {
            child.classList.add("active");
          }
        }
      }
    });
  }, [location.pathname]);

  const toggleMenu = () => {
    sideNavRef.current.classList.toggle("collapsed");
    mainRef.current.classList.toggle("collapsed");
  };
  function allowDrop(ev) {
    ev.preventDefault();
  }
  function onDrop(ev) {
    console.log(ev.view.innerHeight, ev.pageY);
    console.log(ev.view.innerWidth, ev.pageX);
    if (
      ev.pageX < ev.view.innerWidth - 35 &&
      ev.pageX > 0 &&
      ev.pageY < ev.view.innerHeight &&
      ev.pageY > 0
    ) {
      setMenuPosition({ ...menuPosition, x: ev.pageX - 20, y: ev.pageY - 20 });
    }
  }
  const floatMenuRef = useRef();
  function openMenu(e) {
    floatMenuRef.current.classList.add("active");
  }
  function closeMenu(e) {
    floatMenuRef.current.classList.remove("active");
  }
  return (
    <div className="wrapper-container">
      <div className="wrapper">
        {/* <div
          ref={floatMenuRef}
          draggable
          onDragEnd={onDrop}
          style={{ left: menuPosition.x, top: menuPosition.y }}
          className="floating-menu"
        >
          <ion-icon onClick={openMenu} placeholder='menu' size="large" name="grid-outline"></ion-icon>
          <div   className="menu-content">
            12312312
          </div>
        </div> */}
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
              <Link to={`${url}/menu`}>
                <span className="icon">
                  <ion-icon size="large" name="grid-outline"></ion-icon>
                </span>
                <span className="title">Menu detail</span>
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
              <Link to={"/signout"}>
                <span className="icon">
                  <ion-icon size="large" name="log-out-outline"></ion-icon>
                </span>
                <span className="title">Sign out</span>
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

          <div className="app" id="app">
            <div className="background">
              <img src="/img/background.png" alt="" />
            </div>
            {isLoading && (
              <LoadingComponent
                type={"circle"}
                timelapse={1500}
                end={() => setIsLoading(false)}
              ></LoadingComponent>
            )}
            {!isLoading && (
              <>
                <div ref={footerRef}>
                  <BreadcrumbComponent></BreadcrumbComponent>
                </div>
                <Switch>
                  <Route exact path={`${path}`}>
                    <HomePage></HomePage>
                  </Route>
                  <Route path={`${path}/chat`}>
                    <ChatPage></ChatPage>
                  </Route>
                  <Route path={`${path}/learn`}>
                    <Switch>
                      <Route path={`${path}/learn`} exact>
                        <LearnPage></LearnPage>
                      </Route>
                      <Route path={`${path}/learn/:id`}>
                        <Switch>
                          <Route path={`${path}/learn/:id`} exact>
                            <LearnDetailPage></LearnDetailPage>
                          </Route>
                          <Route path={`${path}/learn/:id/online`}>
                            <OnlineMeetingPage></OnlineMeetingPage>
                          </Route>
                        </Switch>
                      </Route>
                    </Switch>
                  </Route>
                  <Route path={`${path}/menu`}>
                    <Route exact path={`${path}/menu`}>
                      <MenuPage></MenuPage>
                    </Route>
                    <Switch>
                      <Route path={`${path}/menu/schedule`}>
                        <SchedulePage></SchedulePage>
                      </Route>
                      <Route path={`${path}/menu/attendance`}>
                        <AttendancePage></AttendancePage>
                      </Route>
                      <Route path={`${path}/menu/ticket`}>
                        <TicketPage></TicketPage>
                      </Route>
                      <Route path={`${path}/menu/chat`}>
                        <ChatPage></ChatPage>
                      </Route>
                      <Route path={`${path}/menu/jira`}>
                        <JiraPage></JiraPage>
                      </Route>
                      <Route path={`${path}/menu/subject-manage`}>
                        <SubjectManagePage></SubjectManagePage>
                      </Route>
                      <Route path={`${path}/menu/log-work`}>
                        <LogworkPage></LogworkPage>
                      </Route>
                    </Switch>
                  </Route>
                </Switch>
              </>
            )}
          </div>
          <div>
            <FooterComponent></FooterComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapperComponent;
