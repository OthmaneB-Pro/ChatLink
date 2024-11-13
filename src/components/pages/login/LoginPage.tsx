import { useForm } from "react-hook-form"
import { yupSchema } from "./yupSchema"
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";


type FormValues = {
  email: string;
  password: string;
  verifyPassword: string;
}
export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({resolver: yupResolver(yupSchema)})

  const onSubmit = (data : FormValues) => console.log(data) 
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="email" />
      {errors.email && <p>{errors.email.message}</p>}
      <input {...register("password")} placeholder="password" />
      {errors.password && <p>{errors.password.message}</p>}
      <input {...register("verifyPassword")} placeholder="verifyPassword" />
      {errors.verifyPassword && <p>{errors.verifyPassword.message}</p>}

      <button type="submit">Submit</button>
    </StyledForm>
  )
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
`;