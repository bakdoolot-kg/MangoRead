import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/features/authSlice";
import { useLoginMutation } from "../../redux/features/authApiSlice";

import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  TextField,
} from "@mui/material";

const LoginForm = ({ value, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [remembered, setRemembered] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const [login, { isLoading }] = useLoginMutation();

  const handleRemember = (e) => {
    setRemembered(e.target.checked);
  };

  const submit = async (data) => {
    try {
      const {username, password } = data
      const userData = await login({ username, password }).unwrap()
      dispatch(setCredentials({ ...userData, username, remembered }))
      onClose()
      reset({})
      navigate('/')
    } catch (error) {
      console.log(error);
    } finally {

    }
    // dispatch(signInUser(data));
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <TextField
        {...register("username", { required: true })}
        placeholder="Username"
        fullWidth
        size="small"
        sx={{ fontSize: "24px" }}
      />
      <TextField
        {...register("password", { required: true })}
        placeholder="Password"
        type="password"
        fullWidth
        margin="normal"
        size="small"
        sx={{ fontSize: "24px" }}
      />
      <FormGroup sx={{ mt: 1 }}>
        <FormControlLabel
          control={
            <Checkbox
              {...register("remembered")}
              defaultChecked
              checked={remembered}
              onChange={handleRemember}
            />
          }
          label="Запомнить меня"
        />
      </FormGroup>
      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{ mt: 2 }}
      >
        {value === 0 ? "Вход" : "Регистрация"}
      </Button>
    </form>
  );
};

export default LoginForm;
