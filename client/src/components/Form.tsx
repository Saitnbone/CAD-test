import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { useState } from "react";
import { submitContactForm } from "../api/api";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const validation = Yup.object({
  name: Yup.string()
    .matches(
      /^[A-Za-zА-Яа-яЁё -]+$/,
      "Можно использовать только латиницу, кириллицу и знак '-'"
    )
    .required("Обязательное поле для заполнения"),
  email: Yup.string()
    .email("Адрес почты указан неверно")
    .required("Обязательное поле для заполнения"),
  message: Yup.string().required("Обязательное поле для заполнения"),
});

export const ContactForm: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    resolver: yupResolver(validation),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await submitContactForm(data);
      setSuccess(`Спасибо за ваше сообщение, ${response.name}!`);
      setError(null);
      navigate("/generate");
    } catch (error) {
      setError("Произошла ошибка при отправке сообщения. Попробуйте еще раз.");
      setSuccess(null);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        border: "1px solid",
        borderRadius: "10px",
        maxWidth: "400px",
        padding: "20px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl fullWidth margin="normal" sx={{ mb: 1 }}>
        <TextField label="Name" {...register("name")} error={!!errors.name} />
        <FormHelperText error={!!errors.name} sx={{ minHeight: "1.7em" }}>
          {errors.name?.message}
        </FormHelperText>
      </FormControl>

      <FormControl fullWidth margin="normal" sx={{ mb: 1 }}>
        <TextField
          label="Email"
          {...register("email")}
          error={!!errors.email}
        />
        <FormHelperText error={!!errors.email} sx={{ minHeight: "1.7em" }}>
          {errors.email?.message}
        </FormHelperText>
      </FormControl>

      <FormControl fullWidth margin="normal" sx={{ mb: 4 }}>
        <TextField
          label="Message"
          {...register("message")}
          error={!!errors.message}
          multiline
          rows={4}
        />
        <FormHelperText error={!!errors.message} sx={{ minHeight: "1.7em" }}>
          {errors.message?.message}
        </FormHelperText>
      </FormControl>

      <Button
        color="primary"
        variant="contained"
        fullWidth
        disabled={!isValid}
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </Button>

      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Box>
  );
};
