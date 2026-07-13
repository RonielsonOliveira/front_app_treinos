import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "../services/axios";

export function useAlunoPerfil() {
  const [aluno, setAluno] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadAluno() {
      try {
        setIsLoading(true);

        const { data } = await axios.get("/alunos/me");

        setAluno(data);
      } catch (err) {
        toast.error("Erro ao carregar dados do aluno");
      } finally {
        setIsLoading(false);
      }
    }

    loadAluno();
  }, []);

  return {
    aluno,
    isLoading,
  };
}
