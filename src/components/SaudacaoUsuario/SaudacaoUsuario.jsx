import { useSelector } from "react-redux";

import styled from "styled-components";

export const Usuario = styled.div`
  grid-area: usuario;
  color: var(--cor-neutra-light);

  & > h1 {
    margin: 16px 0 0 0;
  }

  & > p {
    margin: 8px 0 16px 0;
  }
`;

const SaudacaoUsuario = () => {
  const userName = useSelector((state) => state.user.name);

  return (
    <Usuario>
      <h1>Olá, {userName}</h1>
      <p>Veja como estão suas finanças hoje.</p>
    </Usuario>
  );
};

export default SaudacaoUsuario;
