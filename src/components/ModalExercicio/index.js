import * as S from "./styled";

export default function ModalExercicio({
  open,
  exercicio,
  series,
  repeticoes,
  selecionado,
  onSeriesChange,
  onRepeticoesChange,
  onCancel,
  onConfirm,
  onRemove,
}) {
  if (!open || !exercicio) return null;
  const youtubeId = "M7lc1UVf-VE";
  return (
    <S.Overlay>
      <S.Container>
        <img src={exercicio.FotoExercicios[0].url} alt={exercicio.nome} />
        <div style={{ marginTop: 20 }}>
          <iframe
            src="https://www.youtube.com/embed/M7lc1UVf-VE"
            title="Vídeo"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <h2>{exercicio.nome}</h2>

        <div className="campo">
          <label>Séries</label>

          <input
            type="number"
            value={series}
            onChange={(e) => onSeriesChange(e.target.value)}
          />
        </div>

        <div className="campo">
          <label>Repetições</label>

          <input
            type="number"
            value={repeticoes}
            onChange={(e) => onRepeticoesChange(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button className="cancel" onClick={onCancel}>
            Cancelar
          </button>

          {selecionado && (
            <button className="remove" onClick={onRemove}>
              Remover
            </button>
          )}

          <button className="confirm" onClick={onConfirm}>
            {selecionado ? "Salvar" : "Adicionar"}
          </button>
        </div>
      </S.Container>
    </S.Overlay>
  );
}
