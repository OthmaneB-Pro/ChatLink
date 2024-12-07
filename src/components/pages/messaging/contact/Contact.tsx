import styled from "styled-components";
import { useState } from "react";
import ContactPage from "../../../reusable-ui/Contact";
import { Data_contact } from "../../../../data/fakeContact";
import ProfilMessage from "../message/ProfilMessage";
import TitleContact from "./TitleContact";

export default function Contact() {
  const [contacts, setContacts] = useState<string[]>([]);

  return (
    <ContactStyled>
      <TitleContact/>
      <ProfilMessage/>

      {contacts.length === 0 ? (
        <>
          {Data_contact.map((contact) => (
            <ContactPage
              key={contact.id}
              src={contact.src}
              alt="alt"
              username={contact.username}
              phone={contact.phone}
            />
          ))}
        </>
      ) : (
        "Aucun contact pour le moment"
      )}
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  background: #fff;
  .profil {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      background: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid black;
      cursor: pointer;
    }
  }
`;
