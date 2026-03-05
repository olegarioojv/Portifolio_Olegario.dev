import {
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavSocial,
  SocialIcon,
} from "./Navbar.styled";

import { Github, Linkedin } from "lucide-react";

function Navbar() {
  return (
    <NavContainer>
      <NavLogo>{`{777}`} olegario.dev</NavLogo>

      <NavMenu>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Tech Stack</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contact</NavLink>
        </NavItem>
      </NavMenu>

      <NavSocial>
        <SocialIcon>
          <a
            href="https://github.com/olegarioojv"
            target="_blank"
            rel="noopener noreferrer">
            <Github />
          </a>
        </SocialIcon>

        <SocialIcon>
          <a
            href="https://www.linkedin.com/in/olegariojv/"
            target="_blank"
            rel="noopener noreferrer">
            <Linkedin />
          </a>
        </SocialIcon>
      </NavSocial>
    </NavContainer>
  );
}

export default Navbar;
