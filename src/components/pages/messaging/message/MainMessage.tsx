import { useState } from "react";
import Message from "../../../reusable-ui/Message";
import { getCurrentTime } from "../../../../utils/getCurrentTime";

export default function MainMessage() {
  const [message, setMessage] = useState<{ text: string; timestamp: string }[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [modify, setModify] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentMessage.trim() === "") return;
    const timestamp = getCurrentTime(); 
    const newMessage = { text: currentMessage, timestamp };
    
    setMessage([...message, newMessage]); 
    setCurrentMessage("");
  };
  const handleContextMenu = (event : React.MouseEvent) => {
    event.preventDefault();
    const result = window.confirm("Voulez-vous modifier ce message ?");
    if (result) {
      setModify(true)
    }
  };

  return (
    <div className="messages">

        {modify && 
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Entrez votre message"
              value={currentMessage}
              onChange={(event) => {
                setCurrentMessage(event.target.value);
              }}
            />
            <button type="submit" onClick={()=> setModify(false)}>OK</button>
          </form>
        }
      {message.map((message, index) => (
        <Message label={message.text} key={index} timestamp={message.timestamp} onContextMenu={handleContextMenu} />
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
    </div>
  );
}
