import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      Page d'erreur 404
      <button onClick={() => navigate("/")}>
        Revenir sur la page d'accueil
      </button>
    </div>
  );
}
