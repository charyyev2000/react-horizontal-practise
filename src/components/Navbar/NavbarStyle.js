import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  bottom: 7px;
  left: 50%;
  transform: translate(-50%, 0);
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 99;
`;
