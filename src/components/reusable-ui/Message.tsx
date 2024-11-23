import styled from "styled-components";

export default function Message({
  label,
  timestamp,
  onContextMenu,
}: {
  label: string;
  timestamp: string;
  onContextMenu : (event : React.MouseEvent) => void;
}) {
  return (
    <MessageStyled onContextMenu={onContextMenu}>
      <p className="text">{label}</p>
      <p className="time">{timestamp}</p>
    </MessageStyled>
  );
}

const MessageStyled = styled.div`
  margin: 10px;
  display: flex;
  border-radius: 5px;
  max-width: 450px;
  background: white;
  padding: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);

  .text {
    text-align: justify;
    max-width: 400px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-word;
  }

  .time {
    font-size: 12px;
    margin-left: auto;
    margin-top: auto;
    color: #d0d0d0;
    background: #469bf6;
    padding: 5px;
    border-radius : 5px;
  }
`;
