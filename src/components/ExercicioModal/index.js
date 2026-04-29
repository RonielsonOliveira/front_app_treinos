import { FaUserCircle } from "react-icons/fa";
import {
  ModalOverlay,
  ModalContent,
  ImageWrapper,
  ExercicioInfo,
  Title,
  Description,
  ExercicioDados,
} from "./styled";

export function ExercicioModal({ exercicio, onClose }) {
  if (!exercicio) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ImageWrapper>
          {exercicio.FotoExercicios?.[0] ? (
            <img src={exercicio.FotoExercicios[0].url} alt={exercicio.nome} />
          ) : (
            <FaUserCircle size={100} />
          )}
        </ImageWrapper>
        <ExercicioInfo>
          <Title>{exercicio.nome}</Title>
          <Description>{exercicio.descricao}</Description>

          <ExercicioDados>
            <label>Numero De Series</label>
            {exercicio.TreinoExercicio?.numerodeSeries}
            <label>Numero De Repeticoes</label>
            {exercicio.TreinoExercicio?.numerodeRepeticoes}
          </ExercicioDados>

          <button onClick={onClose}>Fechar</button>
        </ExercicioInfo>
      </ModalContent>
    </ModalOverlay>
  );
}
