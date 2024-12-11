import styled from "styled-components";

type ButtonType = {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  label: string;
};

export default function Button({ type, onClick, label }: ButtonType) {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  padding: 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 25px;

  &:hover {
    background: #0069d9;
    cursor: pointer;
  }
`;
