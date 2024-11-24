import { useState } from "react";
import Message from "../../../reusable-ui/Message";
import { getCurrentTime } from "../../../../utils/getCurrentTime";
import { useMessagingStore } from "../../../../store/useMessagingStore";
import styled from "styled-components";

export default function MainMessage() {
  const [message, setMessage] = useState<{ text: string; timestamp: string }[]>(
    []
  );
  const [currentMessage, setCurrentMessage] = useState("");
  const [modify, setModify] = useState(false);
  const { sender } = useMessagingStore();

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
          <button type="submit" onClick={() => setModify(false)}>
            OK
          </button>
        </form>
      )}
      {message.map((message, index) => (
        <Message
          label={message.text}
          key={index}
          timestamp={message.timestamp}
          className={sender === "Moi" ? "sent" : "received"}
          onContextMenu={handleContextMenu}
        />
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre message"
          value={currentMessage}
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
        />
        <button type="submit">OK</button>
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
    input {
      padding: 15px;
      width: 50vw;
    }
    button {
      padding: 15px;
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