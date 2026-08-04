import React from 'react'

import FotosPreview from '../FotosPreview'

import { UploadBox, FotosGrid } from '../../pages/Exercicio/styled'

export default function UploadFotos({ fotos, novasFotos, onChange, onRemove }) {
  return (
    <>
      <UploadBox>
        <span>+</span>

        <input
          type="file"
          accept="image/png,image/jpeg"
          multiple
          onChange={onChange}
        />
      </UploadBox>

      <FotosGrid>
        <FotosPreview
          fotos={fotos}
          novasFotos={novasFotos}
          onRemoveNovaFoto={onRemove}
        />
      </FotosGrid>
    </>
  )
}
