import * as yup from "yup";

export const yupSchema = yup.object().shape({
  email: yup.string().required("Un email est requis").email("Email non valide"),
  password: yup
    .string()
    .required("Le mot de passe est requis")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères"),
  verifyPassword: yup
    .string()
    .required("Le mot de passe est requis")
    .oneOf([yup.ref("password")], "Les mots de passes ne sont pas identiques"),
});
