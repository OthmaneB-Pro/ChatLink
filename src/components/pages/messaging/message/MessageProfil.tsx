import styled from "styled-components";

export default function MessageProfil({ sender }: { sender: "Moi" | "Lui" }) {
  return (
    <MessageProfilStyled>
      <h2>
        Conversation de <span>{sender}</span>
      </h2>
    </MessageProfilStyled>
  );
}

const MessageProfilStyled = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;

  h2 {
    font-weight: 400;
  }
  span {
    text-decoration: underline;
  }
`;
