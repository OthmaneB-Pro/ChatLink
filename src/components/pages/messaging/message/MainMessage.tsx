import { useState } from "react";
import Message from "../../../reusable-ui/Message";
import { getCurrentTime } from "../../../../utils/getCurrentTime";

export default function MainMessage() {
  const [message, setMessage] = useState<{ text: string; timestamp: string }[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentMessage.trim() === "") return;
    const timestamp = getCurrentTime(); 
    const newMessage = { text: currentMessage, timestamp };
    
    setMessage([...message, newMessage]); 
    setCurrentMessage("");
  };
  return (
    <div className="messages">
      {message.map((message, index) => (
        <Message label={message.text} key={index} timestamp={message.timestamp} />
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="message"
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
