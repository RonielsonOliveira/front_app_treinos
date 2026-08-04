import { useState } from 'react'
import { FaImage, FaPlayCircle, FaUserCircle } from 'react-icons/fa'

import {
  ModalOverlay,
  ModalContent,
  Tabs,
  Tab,
  MediaWrapper,
  ExercicioInfo,
  Title,
  Description,
  ExercicioDados,
  Footer,
  VideoWrapper
} from './styled'

const VIDEO_URL_EXEMPLO = 'https://www.youtube.com/embed/F4Q1g2z8MWM'

export default function ExercicioModal({ exercicio, onClose }) {
  const [aba, setAba] = useState('foto')

  if (!exercicio) return null

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Tabs>
          <Tab $active={aba === 'foto'} onClick={() => setAba('foto')}>
            <FaImage />
            Foto
          </Tab>

          <Tab $active={aba === 'video'} onClick={() => setAba('video')}>
            <FaPlayCircle />
            Vídeo
          </Tab>
        </Tabs>

        <MediaWrapper>
          {aba === 'foto' ? (
            exercicio.FotoExercicios?.[0] ? (
              <img src={exercicio.FotoExercicios[0].url} alt={exercicio.nome} />
            ) : (
              <FaUserCircle />
            )
          ) : (
            <VideoWrapper>
              <iframe
                src={VIDEO_URL_EXEMPLO}
                title="Vídeo"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoWrapper>
          )}
        </MediaWrapper>

        <ExercicioInfo>
          <Title>{exercicio.nome}</Title>

          <Description>{exercicio.descricao}</Description>

          <ExercicioDados>
            <div className="item">
              <label>Séries</label>

              <span>{exercicio.TreinoExercicio?.numerodeSeries ?? '-'}</span>
            </div>

            <div className="item">
              <label>Repetições</label>

              <span>
                {exercicio.TreinoExercicio?.numerodeRepeticoes ?? '-'}
              </span>
            </div>
          </ExercicioDados>
        </ExercicioInfo>

        <Footer>
          <button onClick={onClose}>Fechar</button>
        </Footer>
      </ModalContent>
    </ModalOverlay>
  )
}
