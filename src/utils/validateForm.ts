import * as yup from "yup";

export const LoginValidate = yup.object().shape({
  username: yup.string().trim().required("Username es requerido"),
  password: yup
    .string()
    .trim()
    .required("Password es requerido")
    .min(4, "El mínimo debe ser 4 caracteres")
    .max(12, "El máximo es de 12 caracteres"),
});
