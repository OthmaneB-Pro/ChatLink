import { useForm } from "react-hook-form";
import { yupSchema } from "./yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../store/useUserStore";

type FormValues = {
  email: string;
  password: string;
  verifyPassword: string;
};
export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useUserStore()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(yupSchema) });
  const [isLogin, setIsLogin] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setUser({ username: data.email, password: data.password});
    navigate("/menu");
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h1>{isLogin ? "Connexion" : "Inscription"}</h1>
      <input {...register("email")} placeholder="email" />
      {errors.email && <p>{errors.email.message}</p>}
      <input
        {...register("password")}
        type="password"
        placeholder="mot de passe"
      />
      {errors.password && <p>{errors.password.message}</p>}
      {!isLogin && (
        <>
          <input
            {...register("verifyPassword")}
            placeholder="verifier le mot de passe"
            type="password"
          />
          {errors.verifyPassword && <p>{errors.verifyPassword.message}</p>}
        </>
      )}
      <button type="submit">{isLogin ? "Se connecter" : "S'inscrire"}</button>
      {!isLogin && (
        <span className="link">
          Vous avez déjà un compte ?{" "}
          <button onClick={() => setIsLogin(true)}>Se connecter</button>
        </span>
      )}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
    }
  }

  p {
    color: red;
    font-size: 14px;
    margin-top: -8px;
    margin-bottom: 10px;
  }

  button {
    padding: 10px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
  .link {
    margin-top: 10px;
    button {
      background: none;
      border: none;
      color: blue;
      cursor: pointer;
      padding: 0;
      font: inherit;

      &:hover {
        text-decoration: underline;
        color: #730096;
      }
    }
  }
`;
