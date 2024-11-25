import styled from "styled-components";
import { useUserStore } from "../../../../store/useUserStore";
import { useState } from "react";
import ContactPage from '../../../reusable-ui/Contact';

export default function Contact() {
  const { username, picture } = useUserStore();
  const [contacts, setContacts] = useState<string[]>([]);

  return (
    <ContactStyled>
      <h5>ChatLink</h5>
      <div className="profil">
        <img src={picture} alt="avatar" />
        <h4>{username}</h4>
      </div>

      {contacts.length === 0
        ? <>
          <ContactPage src="daz" alt="alt" username="Othmane" phone="07 68 77 70 67" />
        </>
        : "Aucun contact pour le moment"}
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  background: #d1d1d1;
  .profil {
    display: flex;
    gap: 20px;

    img {
      background: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid black;
    }
  }
`;
