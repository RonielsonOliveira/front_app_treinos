import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaEdit, FaWindowClose } from "react-icons/fa";
import Slider from "react-slick";

import {
  Card,
  CardFotos,
  CardInfo,
  CardActions,
} from "../../pages/Exercicios/styled";

export default function ExercicioCard({ exercicio, onDelete }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Card>
      <CardFotos>
        {exercicio.FotoExercicios?.length ? (
          <Slider {...sliderSettings}>
            {exercicio.FotoExercicios.map((foto, idx) => (
              <img key={idx} src={foto.url} alt={`Foto ${idx}`} />
            ))}
          </Slider>
        ) : (
          <FaUserCircle size={120} />
        )}
      </CardFotos>

      <CardInfo>
        <h3>{exercicio.nome}</h3>
        <p>{exercicio.descricao}</p>

        <p>
          <strong>Séries:</strong> {exercicio.numerodeSeries}
        </p>

        <p>
          <strong>Repetições:</strong> {exercicio.numerodeRepeticoes}
        </p>

        <CardActions>
          <Link to={`/exercicio/${exercicio.id}/edit`}>
            <FaEdit size={26} />
          </Link>

          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              onDelete(exercicio.id);
            }}
          >
            <FaWindowClose size={26} />
          </Link>
        </CardActions>
      </CardInfo>
    </Card>
  );
}
