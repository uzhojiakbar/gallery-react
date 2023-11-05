import styled from "styled-components";

const MainRoot = styled.div`
  padding: 10px;

  min-width: 100%;
  min-height: 100vh;
  background-color: ${({ toggle }) =>
    toggle ? "var(--background-light)" : "var(--background-dark)"};

  transition: all 0.7s ease-in-out;
`;

export { MainRoot };
