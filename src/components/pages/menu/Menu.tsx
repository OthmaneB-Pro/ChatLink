import { useState } from "react";
import { useUserStore } from "../../../store/useUserStore";

export default function Menu() {
  const { username, password, picture, setUser } = useUserStore();
  const [isModify, setIsModify] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ [name]: value });
  };

  return (
    <div>
      Menu :<h2>Username : {username}</h2>
      <h2>
        Picture : <img src={picture} alt="avatar" />
      </h2>
      <button onClick={() => setIsModify(true)}>Modifier mon profil</button>
      {isModify && (
        <form>
          <input onChange={handleChange} value={username} name="username" />
          <input onChange={handleChange} value={password} name="password" />
          <input onChange={handleChange} value={picture} name="picture" />
          <button type="submit" onClick={() => setIsModify(false)}>
            Valider les modifications
          </button>
        </form>
      )}
    </div>
  );
}
