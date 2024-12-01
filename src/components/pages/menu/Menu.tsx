import { useEffect, useState } from "react";
import { useUserStore } from "../../../store/useUserStore";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const { username, picture, status, setUser } = useUserStore();
  const navigate = useNavigate()
  const [isModify, setIsModify] = useState(false);

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedPicture = localStorage.getItem("picture");
    const savedStatus = localStorage.getItem("status");

    if (savedUsername || savedPicture || savedStatus) {
      setUser({
        username: savedUsername || username,
        picture: savedPicture || picture,
      });
    }
  }, [setUser, username, picture, status]);
  const handleSave = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("picture", picture);
    setIsModify(false);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ [name]: value });
  };

  return (
    <Container>
      <ProfileCard>
        <ProfilePicture src={picture} alt="avatar" />
        <Username>{username}</Username>
        <Status>{status}</Status>
      </ProfileCard>
      <EditButton onClick={() => setIsModify(true)}>Modifier mon profil</EditButton>
      <button onClick={() => navigate("/messaging")}>Annuler</button>
      {isModify && (
        <EditForm>
          <Input onChange={handleChange} value={username} name="username" placeholder="Nom d'utilisateur" />
          <Input onChange={handleChange} value={picture} name="picture" placeholder="URL de l'image" />
          <Select
            value={status}
            onChange={(event) =>
              setUser({
                status: event.target.value as "Disponible" | "Indisponible",
              })
            }
          >
            <option value="Disponible">Disponible</option>
            <option value="Indisponible">Indisponible</option>
          </Select>
          <SubmitButton type="button" onClick={handleSave}>
            Valider les modifications
          </SubmitButton>
        </EditForm>
        
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileCard = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  border: 2px solid #007bff;
`;

const Username = styled.h2`
  font-size: 20px;
  color: #333;
  margin: 5px 0;
`;

const Status = styled.p`
  font-size: 14px;
  color: #666;
`;

const EditButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;


const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`;

const Input = styled.input`
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

const Select = styled.select`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;
