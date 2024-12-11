import { useRef, useState } from "react";
import Message from "../../../reusable-ui/Message";
import { getCurrentTime } from "../../../../utils/getCurrentTime";
import { useMessagingStore } from "../../../../store/useMessagingStore";
import styled from "styled-components";
import Button from "../../../reusable-ui/Button";
import MessageProfil from "./MessageProfil";

export default function MainMessage() {
  const [message, setMessage] = useState<
    { text: string; timestamp: string; fileUrl?: string }[]
  >([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [modify, setModify] = useState(false);
  const { sender } = useMessagingStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSendFileToChat = () => {
    if (!selectedFile) {
      alert("Aucun fichier sélectionné !");
      return;
    }

    const timestamp = getCurrentTime();
    const newMessage = {
      text: selectedFile.name,
      timestamp,
      fileUrl: URL.createObjectURL(selectedFile),
    };

    setMessage([...message, newMessage]);
    setSelectedFile(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentMessage.trim() === "") return;

    const timestamp = getCurrentTime();
    const newMessage = { text: currentMessage, timestamp };

    setMessage([...message, newMessage]);
    setCurrentMessage("");
  };

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    const result = window.confirm("Voulez-vous modifier ce message ?");
    if (result) {
      setModify(true);
    }
  };

  return (
    <MainMessageStyled>
      {modify && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Entrez votre message"
            value={currentMessage}
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
          />
          <Button type="submit" onClick={() => setModify(false)} label="OK" />
        </form>
      )}

      <MessageProfil sender={sender} />
      {message.map((message, index) => (
        <Message
          label={
            message.fileUrl ? (
              <a
                href={message.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {message.text} (Fichier)
              </a>
            ) : (
              message.text
            )
          }
          key={index}
          timestamp={message.timestamp}
          className={sender === "Moi" ? "sent" : "received"}
          onContextMenu={handleContextMenu}
        />
      ))}

      <form onSubmit={handleSubmit}>
        <Button
          type="button"
          onClick={handleButtonClick}
          label="Choisir un fichier"
        />

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        {selectedFile && (
          <Button
            type="button"
            onClick={handleSendFileToChat}
            label="Envoyer le fichier"
          />
        )}
        <input
          type="text"
          placeholder="Entrez votre message"
          value={currentMessage}
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
        />
        <Button type="submit" label="Envoyer" />
      </form>
    </MainMessageStyled>
  );
}

const MainMessageStyled = styled.div`
  background-color: #dcedf5;
  display: flex;
  flex-direction: column;

  form {
    margin-top: auto;
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 10px;
    input {
      padding: 15px;
      width: 50vw;
      border-radius: 25px;
      border: none;
    }
  }

  .sent {
    background: #d6ffd6;
    margin-left: auto;
    width: 400px;
    .time {
      background: #8ee68e;
      color: white;
    }
  }
  .received {
    background: #7a7ad6;
  }
`;
