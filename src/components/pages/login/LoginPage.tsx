import { useForm } from "react-hook-form"
import { yupSchema } from "./yupSchema"
import { yupResolver } from "@hookform/resolvers/yup";


type FormValues = {
  email: string;
  password: string;
  verifyPassword: string;
}
export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({resolver: yupResolver(yupSchema)})

  const onSubmit = (data : FormValues) => console.log(data) 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="email" />
      {errors.email && <p>{errors.email.message}</p>}
      <input {...register("password")} placeholder="password" />
      {errors.password && <p>{errors.password.message}</p>}
      <input {...register("verifyPassword")} placeholder="verifyPassword" />
      {errors.verifyPassword && <p>{errors.verifyPassword.message}</p>}

      <button type="submit">Submit</button>
    </form>
  )
}
