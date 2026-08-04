import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa'
import {
  ExercicioCheck,
  Exercicio,
  ImageWrapper,
  ExercicioInfoWrapper,
  ExercicioInfoTitle,
  ExercicioInfoDetails,
  Footer,
  CheckboxWrapper,
  ExercicioSeriesERepeticoes,
  VideoButton
} from './styled'

export default function ExercicioCard({
  exercicio,
  checked,
  onChange,
  children
}) {
  console.log(exercicio)
  return (
    <ExercicioCheck>
      <Exercicio>
        <ImageWrapper>
          {exercicio.FotoExercicios?.[0] ? (
            <img src={exercicio.FotoExercicios[0].url} alt={exercicio.nome} />
          ) : (
            <FaUserCircle size={80} />
          )}

          <VideoButton
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()

              console.log('Abrir vídeo')
            }}
          >
            <FaPlay />
          </VideoButton>
        </ImageWrapper>

        <ExercicioInfoWrapper>
          <ExercicioInfoTitle>{exercicio.nome}</ExercicioInfoTitle>

          <ExercicioInfoDetails>{exercicio.descricao}</ExercicioInfoDetails>

          {children}

          <Footer>
            <span></span>

            <CheckboxWrapper>
              <input
                className="checkbox"
                type="checkbox"
                checked={checked}
                onChange={onChange}
              />
            </CheckboxWrapper>
          </Footer>
        </ExercicioInfoWrapper>
      </Exercicio>
    </ExercicioCheck>
  )
}
