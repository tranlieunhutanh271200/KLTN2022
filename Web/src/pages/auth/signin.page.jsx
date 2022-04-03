import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./auth.css";
function SignInPage() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();
  const { url, path } = useRouteMatch();
  console.log(path);
  const signIn = () => {
    //calling api here

    //remember to encrypt data
    console.log(account);

    //check response
    history.push("/dashboard");
  };
  return (
    <div className="auth">
      <div className="authBox">
        <form className="form">
          <h1 className="login_title">Login</h1>
          <div>
            <input
              type="text"
              name="userName"
              autoComplete="false"
              placeholder="Username or email..."
              onChange={(e) =>
                setAccount({ ...account, username: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              autoComplete="false"
              placeholder="Password..."
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
            />
          </div>
        </form>
        <div className="login">
          <button onClick={signIn}>
            Login <ion-icon size="large" name="log-in-outline"></ion-icon>
          </button>
        </div>
        <div className="forgot">
          <Link to={`${path}/register`}>Register</Link> your school with us
        </div>
        <div className="forgot">
          Don't remember your password? Reset it <Link to={`${path}/forgot-pwd`}>here</Link>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
