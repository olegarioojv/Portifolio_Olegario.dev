import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  padding: 20px 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled.div`
  font-size: 22px;
  font-weight: bold;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`;

export const NavItem = styled.li`
  font-size: 14px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #a0a0a0;
  transition: 0.3s;

  &:hover {
    background: linear-gradient(90deg, #00dbde, #fc00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const NavSocial = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const SocialIcon = styled.div`
  width: 42px;
  height: 42px;

  background: #a7a7a7;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.3s;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 22px;
    height: 22px;
    color: #1a1a1a;
  }

  &:hover {
    background: linear-gradient(90deg, #00dbde, #fc00ff);
  }
`;
