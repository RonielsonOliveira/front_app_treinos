import { get } from "lodash";
import { toast } from "react-toastify";

import { uploadFoto } from "../../services/fotoService";

export async function enviarFoto({
  file,
  id,
  setFotos,
  setIsLoading,
  dispatch,
  actions,
}) {
  if (!file) return;

  const preview = URL.createObjectURL(file);

  setFotos((prev) => [...prev, preview]);

  try {
    setIsLoading(true);

    const data = await uploadFoto(id, file);

    const foto = get(data, "foto.url", preview);

    setFotos((prev) => [...prev.slice(0, -1), foto]);

    toast.success("Foto enviada com sucesso");
  } catch (error) {
    toast.error("Erro ao enviar foto");

    const status = get(error, "response.status");

    if (status === 401) {
      dispatch(actions.loginFailure());
    }
  } finally {
    setIsLoading(false);
  }
}
