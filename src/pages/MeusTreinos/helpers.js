export function getDiaAtual() {
  const dia = new Date().getDay();

  return dia === 0 ? 7 : dia;
}
