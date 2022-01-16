import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/actions/authActions";
import { RootState } from "../../../store/store";
import "./Login.scss";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth: boolean = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isAuth === true) {
      navigate("/campaigns-list");
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      username: { value: string };
      password: { value: string };
    };

    dispatch(login(target.username.value, target.password.value));
  };

  return (
    <div className="login-wrapper flex-row-center">
      <div className="form-wrapper bg-orange">
        <h1>Campaigns</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div className="form-input">
              <input type="text" placeholder="Username" name="username" required />
              {/*               <div className="error">
                <small>This area cannot be empty</small>
              </div> */}
            </div>
            <div className="form-input">
              <input type="password" placeholder="Password" name="password" required />
              {/*               <div className="error">
                <>Bu alan boş bırakılamaz</              <div className="error">
                <small>This area cannot be empty</small>
              </div>small>
              </div> */}
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
