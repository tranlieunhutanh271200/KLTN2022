import "./css/styles.css";
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "./routing/routes.dashboard";
import WrapperComponent from "./components/wrapper/wrapper.component";
import NotfoundPage from "./pages/notfound/notfound.page";
import authRoutes from "./routing/routes.auth";
import AuthWrapper from "./pages/auth/auth.wrapper";
import MiddlewarePage from "./pages/auth/middleware.page";

function App() {
  const history = createBrowserHistory();
  const renderRoutes = routes.map((route, idx) => {
    return (
      <Route
        key={idx}
        path={route.path}
        component={route.main}
        exact={route.exact}
      >
      </Route>
    );
  });
  const renderAuthRoutes = authRoutes.map((route, idx) => (
    <Route
      key={idx * 2}
      path={route.path}
      exact={route.exact}
      component={route.main}
    ></Route>
  ));
  return (
    <Router history={history}>
      <Switch>
        <Route path={'/'} exact={true} component={() => <MiddlewarePage></MiddlewarePage>}>

        </Route>
        <Route path={'/auth'} exact={false}>
          <AuthWrapper></AuthWrapper>
        </Route>
        <Route path="/dashboard" exact={false}>
          <WrapperComponent>
          </WrapperComponent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
