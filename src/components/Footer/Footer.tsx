import { Github, Linkedin } from "lucide-react";
import {
  Divider,
  FooterBottom,
  FooterContact,
  FooterContainer,
  FooterCopyright,
  FooterItem,
  FooterLink,
  FooterMenu,
  FooterSocial,
  FooterText,
  SocialIcon,
} from "./Footer.styled";
import { NavLogo } from "../NavBar/Navbar.styled";

function Footer() {
  return (
    <>
      <FooterContainer id="contact">
        <NavLogo>{`{777}`} olegarioojv</NavLogo>

        <FooterContact>
          <FooterText>+55 035 99191-6370</FooterText>
          <FooterText>olegarioo.dev@gmail.com</FooterText>

          <FooterSocial>
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
          </FooterSocial>
        </FooterContact>
      </FooterContainer>

      <Divider />

      <FooterBottom>
        <FooterMenu>
          <FooterItem>
            <FooterLink href="#home">Home</FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href="#about">About</FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href="#technologies">Technologies</FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href="#projects">Projects</FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterItem>
        </FooterMenu>

        <FooterCopyright>
          Projetado e construído por <span>João Victor</span>
        </FooterCopyright>
      </FooterBottom>
    </>
  );
}

export default Footer;
