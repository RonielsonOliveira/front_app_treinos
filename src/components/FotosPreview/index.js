import React from "react";

export default function FotosPreview({ fotos, novasFotos }) {
  return (
    <>
      {fotos.map((foto, idx) => (
        <img key={idx} src={foto.url} alt={`Foto ${idx}`} />
      ))}

      {novasFotos.map((file, idx) => (
        <img
          key={idx}
          src={URL.createObjectURL(file)}
          alt={`Preview ${idx}`}
          style={{ opacity: 0.6 }}
        />
      ))}
    </>
  );
}
