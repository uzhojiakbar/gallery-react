import styled from "styled-components";

const Nav = styled.div`
  color: white;

  height: 80px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 25px;
  user-select: none;
`;

const Logo = styled.div`
  cursor: pointer;
  > img {
    width: 50px;
    border-radius: 50%;
    border: 1px solid white;
  }

  > img:hover {
    border-radius: 10px;
    transform: scale(1.3);
    border: 1px solid transparent;
  }
`;
const Links = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  .link {
    color: ${({ toggle }) =>
      toggle ? "var(--color-light)" : "var(--color-dark)"};
    padding: 10px 5px;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    text-transform: capitalize;
  }
  .link:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  }
  .active {
    /* color: white; */
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }
  .active:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }
`;
const Options = styled.div`
  .mode {
    cursor: pointer;
  }
  .fa-moon {
    color: var(--background-dark);
  }
`;

export { Nav, Logo, Links, Options };
