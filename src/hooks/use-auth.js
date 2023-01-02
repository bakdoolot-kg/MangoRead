import { useSelector } from "react-redux";
import { selectCurrentAccess } from "../redux/features/authSlice";

export function useAuth() {
  const { user, access } = useSelector(state => state.auth);

  return {
    isAuth: !!user,
    user,
    access
  }
}