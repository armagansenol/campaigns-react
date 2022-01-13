import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/authActions";
import "./Header.scss";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="flex-row-center">
      <h1>Campaigns</h1>
      <div className="logout-btn">
        <a onClick={handleLogout}>Logout</a>
      </div>
    </header>
  );
};

export default Header;
