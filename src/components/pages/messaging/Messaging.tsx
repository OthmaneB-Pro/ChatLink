import styled from "styled-components";
import Contact from "./contact/Contact";

export default function Messaging() {
  return (
    <MessagingStyled>
      <Contact/>
      <div className="messages">Bonjour</div>
    </MessagingStyled>
  );
}

const MessagingStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;

  .contact{
    background-color: white;
  }
  .messages{
    background-color: #dcedf5;
  }
`;
