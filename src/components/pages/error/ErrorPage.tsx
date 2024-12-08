import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>404</Title>
      <Message>Oups ! La page que vous cherchez n'existe pas.</Message>
      <Button onClick={() => navigate("/")}>
        Revenir sur la page d'accueil
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #ff6b6b;
`;

const Message = styled.p`
  margin-top: 16px;
  font-size: 1.25rem;
  color: #555;
`;

const Button = styled.button`
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #4a90e2;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ab8;
  }
`;
