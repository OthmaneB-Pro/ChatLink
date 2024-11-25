import styled from "styled-components";

type ContactType = {
  src: string;
  alt: string;
  username: string;
  phone: string;
};

export default function ContactPage({
  src,
  alt,
  username,
  phone,
}: ContactType) {
  return (
    <ContactStyled>
      <img src={src} alt={alt} />
      <h4>{username}</h4>
      <p>{phone}</p>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  background: white;
  display: flex;
  gap: 20px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid black;
  }
`;
