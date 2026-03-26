import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import axios from "../services/axios";

export default function useTreinoData(id) {
  const [exercicios, setExercicios] = useState([]);
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [treino, setTreino] = useState(null);
  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);

        const [exerciosRes, alunosRes] = await Promise.all([
          axios.get("/exercicios"),
          axios.get("/alunos"),
        ]);
        setExercicios(exerciosRes.data);
        setAlunos(alunosRes.data);

        if (id) {
          const { data } = await axios.get(`/treinos/${id}`);
          setTreino(data);
        }
        setIsLoading(false);
      } catch {
        setIsLoading(false);
        toast.error("Erro ao carregar dados");
      }
    }
    loadData();
  }, [id]);
  return { exercicios, alunos, treino, isLoading };
}
