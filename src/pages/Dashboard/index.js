import { useNavigate } from "react-router-dom";

import { HiUsers } from "react-icons/hi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";

import DashboardCard from "../../components/DashboardCard";

import * as S from "./styled";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <S.Title>Painel do Professor</S.Title>

        <S.SubTitle>Escolha um módulo para começar.</S.SubTitle>
      </S.Header>

      <S.Grid>
        <DashboardCard
          icon={<HiUsers />}
          color="#22c55e"
          title="Gerenciar Alunos"
          description="Cadastre, edite e acompanhe todos os alunos."
          onClick={() => navigate("/alunos")}
        />

        <DashboardCard
          icon={<GiWeightLiftingUp />}
          color="#3b82f6"
          title="Gerenciar Exercícios"
          description="Cadastre e organize todos os exercícios."
          onClick={() => navigate("/exercicios")}
        />

        <DashboardCard
          icon={<FaClipboardList />}
          color="#f59e0b"
          title="Criar Treinos"
          description="Monte treinos personalizados para seus alunos."
          onClick={() => navigate("/treino")}
        />
      </S.Grid>
    </S.Container>
  );
}
