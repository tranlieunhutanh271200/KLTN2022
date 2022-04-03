import { useRouteMatch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import video from '../../assets/video/Learning day by day (1).mp4'
import ForgotPage from './forgot.page';
import RegisterPage from './register.page';
import SignInPage from './signin.page';
function AuthWrapper() {
  let { url, path } = useRouteMatch();
  console.log(path);
  console.log(url);
  return (
    <div className="auth_wrapper">
      <video autoPlay muted id="myVideo">
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="content">
        <Switch>
          <Route exact path={`${path}`}>
            <SignInPage></SignInPage>
          </Route>
          <Route path={`${path}/register`}><RegisterPage></RegisterPage></Route>
          <Route path={`${path}/forgot-pwd`}><ForgotPage></ForgotPage></Route>
        </Switch>
          
      </div>
    </div>
  );
}

export default AuthWrapper;
