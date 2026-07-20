import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
  const navigate = useNavigate();

  const role = useSelector((state) => state.auth.role);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
      return;
    }

    if (role === "user") {
      navigate("/dashboard", { replace: true });
      return;
    }

    if (role === "aluno") {
      navigate("/me/treinos", { replace: true });
    }
  }, [role, isAuthenticated, navigate]);

  return null;
}
