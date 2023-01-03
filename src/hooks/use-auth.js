import { useSelector } from "react-redux";
import { selectCurrentAccess, selectCurrentUser } from "../redux/features/authSlice";
import {useState} from "react";

export function useAuth() {
  const user = useSelector(selectCurrentUser);
  const access = useSelector(selectCurrentAccess)

  return {
    isAuth: !!user,
    user,
    access
  }
}
