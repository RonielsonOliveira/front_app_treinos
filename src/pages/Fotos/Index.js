import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Loading from "../../components/Loading";
import { Container } from "../../styles/GlobalStyles";

import { Form, Title } from "./styled";

import useFotos from "../../hooks/useFotos";

import { enviarFoto } from "./upload";

import * as actions from "../../store/modules/auth/actions";

export default function Fotos() {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { fotos, setFotos, isLoading, setIsLoading } = useFotos(id);

  const handleChange = async (e) => {
    const file = e.target.files[0];

    await enviarFoto({
      file,
      id,
      setFotos,
      setIsLoading,
      dispatch,
      actions,
    });
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>Fotos do Exercício</Title>

      <Form>
        <label htmlFor="foto">
          Selecionar foto
          <input
            id="foto"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleChange}
          />
        </label>
      </Form>

      {fotos.map((foto, index) => (
        <img key={index} src={foto} alt={`Foto ${index + 1}`} />
      ))}
    </Container>
  );
}
