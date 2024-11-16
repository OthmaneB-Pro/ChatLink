import { useUserStore } from "../../../store/useUserStore";

export default function Menu() {
  const { username, password, picture } = useUserStore();
  return <div>Menu : 

    <h2>Username : {username}</h2>
    <h2>Picture : {picture}</h2>
  </div>;
}
