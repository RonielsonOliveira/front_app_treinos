import React from "react";
import { FotoItem, FotoImagem, RemoveButton } from "./styled";

export default function FotosPreview({
  fotos = [],
  novasFotos = [],
  onRemoveNovaFoto,
}) {
  return (
    <>
      {fotos.map((foto, idx) => (
        <FotoImagem key={`foto-${idx}`} src={foto.url} alt={`Foto ${idx}`} />
      ))}

      {novasFotos.map((file, idx) => (
        <FotoItem key={`nova-${idx}`}>
          <FotoImagem src={URL.createObjectURL(file)} alt={`Preview ${idx}`} />

          <RemoveButton type="button" onClick={() => onRemoveNovaFoto(idx)}>
            ✕
          </RemoveButton>
        </FotoItem>
      ))}
    </>
  );
}
