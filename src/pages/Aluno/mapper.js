export function alunoToPayload(form) {
  const payload = {
    nome: form.nome,
    sobrenome: form.sobrenome,
    email: form.email,
    idade: form.idade || null,
    peso: form.peso || null,
    altura: form.altura || null,
  };

  if (form.password) {
    payload.password = form.password;
  }

  return payload;
}
