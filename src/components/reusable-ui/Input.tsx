import styled from "styled-components";

type InputType = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    name: string;
    placeholder: string
}

export default function Input({onChange, value, name, placeholder}: InputType) {
  return (
    <InputStyled onChange={onChange} value={value} name={name} placeholder={placeholder} />

  )
}

const InputStyled = styled.input`
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
`;