import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { RootState } from "../store/store";

function RequireAuth({ children }: { children: JSX.Element }) {
  let location = useLocation();
  const authStatus: boolean = useSelector((state: RootState) => state.auth);

  if (!authStatus) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
