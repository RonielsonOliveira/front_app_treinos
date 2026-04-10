import React from "react";
import { get } from "lodash";
import { Container } from "../../styles/GlobalStyles.js";
import Loading from "../../components/Loading";
import { Title, Form } from "./styled.js";
import axios from "../../services/axios.js";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import * as actions from "../../store/modules/auth/actions.js";

export default function Fotos() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [fotos, setFotos] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/exercicios/${id}`);
        const fotosExercicios = get(data, "FotoExercicios", []);
        setFotos(fotosExercicios.map((f) => f.url));
        setIsLoading(false);
      } catch (error) {
        toast.error("Erro ao obter imagens");
        setIsLoading(false);
        navigate("/");
      }
    };
    getData();
  }, [id]);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fotoURL = URL.createObjectURL(file);
    setFotos((prev) => [...prev, fotoURL]);

    const formData = new FormData();
    formData.append("exercicio_id", id);
    formData.append("foto", file);

    try {
      setIsLoading(true);
      const { data } = await axios.post("/fotos/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const novaFoto = get(data, "foto.url", fotoURL);
      setFotos((prev) => [...prev.slice(0, -1), novaFoto]);
      toast.success("Foto enviada com sucesso");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Erro ao enviar a foto");
      const status = get(error, "response.status", null);
      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos do Exercício</Title>
      <Form>
        <label htmlFor="foto">
          Selecionar foto
          <input
            type="file"
            id="foto"
            accept="image/png, image/jpeg"
            onChange={handleChange}
          />
        </label>
      </Form>

      <>
        {fotos.map((foto, index) => (
          <img key={index} src={foto} alt={`Foto ${index + 1}`} />
        ))}
      </>
    </Container>
  );
}
