import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../../store/useUserStore';

export default function ProfilMessage() {
    const { picture } = useUserStore();
    const navigate = useNavigate()

  return (
    <div className="profil">
        <img src={picture} alt="avatar" onClick={() => navigate("/menu")} />
        <h4>Chats</h4>
      </div>
  )
}
