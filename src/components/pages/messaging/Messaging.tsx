import styled from "styled-components";
import Contact from "./contact/Contact";
import MainMessage from "./message/MainMessage";

export default function Messaging() {
  return (
    <MessagingStyled>
      <Contact/>
      <MainMessage/>
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
