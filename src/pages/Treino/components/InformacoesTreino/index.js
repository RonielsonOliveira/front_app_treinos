import React from 'react'
import * as S from '../../styled'

export default function InformacoesTreino({
  nome,
  setNome,
  descricao,
  setDescricao,
  diaSemana,
  setDiaSemana,
  alunoOrigem,
  alunoId,
  setAlunoId,
  alunos
}) {
  return (
    <S.Section>
      <S.SectionTitle>Informações do treino</S.SectionTitle>

      <S.Fields>
        <S.Field>
          <label>Nome do treino</label>

          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex.: Treino A"
          />
        </S.Field>

        <S.Field>
          <label>Descrição</label>

          <input
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição"
          />
        </S.Field>

        <S.Field>
          <label>Dia do treino</label>

          <S.Select
            value={diaSemana}
            onChange={(e) => setDiaSemana(Number(e.target.value))}
          >
            <option value={1}>Segunda-feira</option>
            <option value={2}>Terça-feira</option>
            <option value={3}>Quarta-feira</option>
            <option value={4}>Quinta-feira</option>
            <option value={5}>Sexta-feira</option>
            <option value={6}>Sábado</option>
            <option value={7}>Domingo</option>
          </S.Select>
        </S.Field>

        {!alunoOrigem && (
          <S.Field className="full">
            <label>Aluno</label>

            <S.Select
              value={alunoId}
              onChange={(e) => setAlunoId(e.target.value)}
            >
              <option value="">Selecione um aluno</option>

              {alunos.map((aluno) => (
                <option key={aluno.id} value={aluno.id}>
                  {aluno.nome} {aluno.sobrenome}
                </option>
              ))}
            </S.Select>
          </S.Field>
        )}
      </S.Fields>
    </S.Section>
  )
}
