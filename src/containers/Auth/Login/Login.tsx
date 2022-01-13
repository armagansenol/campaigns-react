import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/actions/authActions";
import { RootState } from "../../../store/store";
import "./Login.scss";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth: boolean = useSelector((state: RootState) => state.auth);

  const [authStatus, setAuthStatus] = useState<boolean>(isAuth);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      username: { value: string };
      password: { value: string };
    };

    const username = target.username.value;
    const password = target.password.value;

    if (username === "admin" && password === "123123") {
      // setAuthStatus(true);
      dispatch(login(username, password));
      navigate("/campaigns-list");
    }
  };

  return (
    <div className="login-wrapper flex-row-center">
      <div className="form-wrapper bg-orange">
        <h1>Campaigns</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div className="form-input">
              <input type="text" placeholder="Kullanıcı Adı" name="username" required />
              <div className="error">
                <small>Bu alan boş bırakılamaz</small>
              </div>
            </div>
            <div className="form-input">
              <input type="password" placeholder="Şifre" name="password" required />
              <div className="error">
                <small>Bu alan boş bırakılamaz</small>
              </div>
            </div>
          </div>
          <button type="submit">Giriş Yap</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
