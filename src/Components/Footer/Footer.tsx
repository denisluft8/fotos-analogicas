import { insta } from "../../assets";
import { FooterSection } from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterSection>
      <a target="_blank" href="https://www.instagram.com/analog.nostalgic/">
        <img src={insta} />
      </a>
      <h4>Anderson Lins © Todos os Direitos Reservados</h4>
      <p>
        made with love by{" "}
        <a href="https://denisluft8.github.io/portfolio-denisluft/">
          Dênis Luft
        </a>
      </p>
    </FooterSection>
  );
};
