import React, { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import { submitContactForm } from "../api/api";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

interface IFormProps {
  onSubmit: (message: string) => void;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
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

export const ContactForm: React.FC<IFormProps> = ({
  onSubmit,
  setIsSubmitted,
}) => {
  const [isError, setIsError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    resolver: yupResolver(validation),
    mode: "onChange",
  });

  const onFormSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await submitContactForm(data);
      onSubmit(response.message);
      setIsSubmitted(true);
    } catch (error) {
      setIsError(
        "Произошла ошибка при отправке сообщения. Попробуйте еще раз."
      );
      console.log(error);
    }
  };

  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "clamp(2rem, 1.7183rem + 1.4085vw, 3rem)",
        }}
      >
        Only CTA on the page
      </Typography>
      <Box
        component="form"
        sx={{
          position: "relative",
          border: "1px solid",
          borderRadius: "10px",
          maxWidth: "320px",
          padding: "35px",
        }}
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <FormControl
          fullWidth
          sx={{ marginBottom: "50px", position: "relative" }}
        >
          <TextField
            label="Name"
            {...register("name")}
            error={!!errors.name}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "blue",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "purple",
                },
              },
            }}
          />
          <FormHelperText
            error={!!errors.name}
            sx={{
              minHeight: "1.7em",
              color: "red",
              position: "absolute",
              visibility: errors.name ? "visible" : "hidden",
              bottom: "-45px",
            }}
          >
            {errors.name?.message}
          </FormHelperText>
        </FormControl>

        <FormControl
          fullWidth
          sx={{ marginBottom: "50px", position: "relative" }}
        >
          <TextField
            label="Email"
            {...register("email")}
            error={!!errors.email}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "blue",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "purple",
                },
              },
            }}
          />
          <FormHelperText
            error={!!errors.email}
            sx={{
              color: "red",
              position: "absolute",
              visibility: errors.email ? "visible" : "hidden", // Измените здесь
              bottom: "-20px",
            }}
          >
            {errors.email?.message}
          </FormHelperText>
        </FormControl>

        <FormControl
          fullWidth
          sx={{ marginBottom: "30px", position: "relative" }}
        >
          <TextField
            label="Message"
            {...register("message")}
            error={!!errors.message}
            multiline
            rows={4}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "blue",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "purple",
                },
              },
            }}
          />
          <FormHelperText
            error={!!errors.message}
            sx={{
              color: "red",
              position: "absolute",
              visibility: errors.message ? "visible" : "hidden",
              bottom: "-20px",
            }}
          >
            {errors.message?.message}
          </FormHelperText>
        </FormControl>

        <Button
          color="primary"
          variant="contained"
          fullWidth
          disabled={!isValid}
          type="submit"
        >
          Submit
        </Button>
        {isError && <p style={{ color: "red" }}>{isError}</p>}
      </Box>
    </>
  );
};
