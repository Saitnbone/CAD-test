import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const validation = Yup.object({
  name: Yup.string().required("Обязательное поле для заполнения"),
  email: Yup.string()
    .email("Адрес почты указан неверно")
    .required("Обязательное поле для заполнения"),
  message: Yup.string().required("Обязательное поле для заполнения"),
});

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    resolver: yupResolver(validation),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
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
        type="submit"
        disabled={!isValid}
      >
        Submit
      </Button>
    </Box>
  );
};
