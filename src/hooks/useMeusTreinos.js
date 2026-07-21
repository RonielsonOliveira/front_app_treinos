import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "../services/axios";
export function useMeusTreinos() {
  const [treinos, setTreinos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function loadTreinos() {
      try {
        setIsLoading(true);
        const { data } = await axios.get("/me/treinos");
        setTreinos(data);
        setIsLoading(false);
      } catch {
        toast.error("Erro ao carregar seus treinos");
        setIsLoading(false);
      }
    }

    loadTreinos();
  }, []);
  return { treinos, setTreinos, isLoading, setIsLoading };
}
