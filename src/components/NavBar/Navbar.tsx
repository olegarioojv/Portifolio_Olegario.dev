import { useState, useRef, useEffect } from "react";

import {
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavSocial,
  SocialIcon,
  Hamburger,
} from "./Navbar.styled";

import { Github, Linkedin } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <NavContainer ref={menuRef}>
      <NavLogo>{`{777}`} olegarioojv</NavLogo>

      <Hamburger onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <NavMenu $open={open}>
        <NavItem>
          <NavLink href="#" onClick={() => setOpen(false)}>
            Home
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#" onClick={() => setOpen(false)}>
            About
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#" onClick={() => setOpen(false)}>
            Tech Stack
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#" onClick={() => setOpen(false)}>
            Projects
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
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
