import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("El Email no es válido")
    .required("El Email es requerido"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "La contraseña debe tener al menos una letra mayúscula, una minúscula y un número"
    )
    .required("La contraseña es requerida"),
});

console.log("loginSchema:", loginSchema);