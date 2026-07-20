import * as S from "./styled";

export default function DashboardCard({
  icon,
  title,
  description,
  color,
  onClick,
}) {
  return (
    <S.Card color={color} onClick={onClick}>
      <S.Icon>{icon}</S.Icon>

      <S.Title>{title}</S.Title>

      <S.Description>{description}</S.Description>

      <S.Action>Acessar →</S.Action>
    </S.Card>
  );
}
