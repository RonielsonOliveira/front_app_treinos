import * as S from "./styled";

export default function ExercicioListItem({ exercicio, selecionado, onClick }) {
  return (
    <S.Container onClick={onClick}>
      <img src={exercicio.FotoExercicios[0].url} alt={exercicio.nome} />
      <div>
        <h3>{exercicio.nome}</h3>
        <h3>{exercicio.descricao}</h3>

        {selecionado && <span>✔ Selecionado</span>}
      </div>
    </S.Container>
  );
}
