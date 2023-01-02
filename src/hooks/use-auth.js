import { useSelector } from "react-redux";
import { selectCurrentAccess, selectCurrentUser } from "../redux/features/authSlice";

export function useAuth() {
  const user = useSelector(selectCurrentUser);
  const access = useSelector(selectCurrentAccess)

  return {
    isAuth: !!user,
    user,
    access
  }
}