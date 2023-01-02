import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/features/userSlice";
import { Box, Avatar, Button, TextField } from "@mui/material"

const RegisterForm = ({ value }) => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();
  const [image, setImage] = useState("");

  const submit = (data) => {
    let formData = new FormData();
    for (const key in data) {
      formData.set(key, data[key]);
    }
    dispatch(signUpUser(formData));
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar src={image} sx={{ width: 150, height: 150 }} />
        <Button
          variant="text"
          component="label"
          sx={{ color: "#000", mt: 1.5 }}
        >
          Добавить фото
          <Controller
            name="image_file"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <input
                type="file"
                onChange={(e) => {
                  setImage(URL.createObjectURL(e.target.files[0]));
                  onChange(e.target.files[0]);
                }}
                hidden
                accept="image/*"
              />
            )}
            rules={{ required: "Image required" }}
          />
        </Button>
      </Box>

      <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            placeholder="Username"
            fullWidth
            margin="normal"
            size="small"
            sx={{ fontSize: "24px" }}
          />
        )}
        rules={{ required: "Username required" }}
      />

      <Controller
        name="nickname"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            placeholder="Nickname"
            fullWidth
            margin="normal"
            size="small"
            sx={{ fontSize: "24px" }}
          />
        )}
        rules={{ required: "Nickname required" }}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            placeholder="Password"
            type="password"
            fullWidth
            margin="normal"
            size="small"
            sx={{ fontSize: "24px" }}
          />
        )}
        rules={{ required: "Password required" }}
      />

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

export default RegisterForm;
