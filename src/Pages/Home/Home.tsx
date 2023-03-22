import { profile1 } from "../../assets";
import { AboutContainer, HomeContainer } from "./Home.styles";

export const Home = () => {
  return (
    <HomeContainer>
      <h1 style={{ visibility: "hidden" }}>
        Anderson de Lima - Fotos Analógicas
      </h1>
      <AboutContainer>
        <img src={profile1} />
        <h2>Anderson Lins</h2>
        <p>
          Eu sou o Anderson, um fotógrafo amador que descobriu sua paixão pela
          fotografia ao experimentar a minha câmera Olympus Trip 35. Gosto de
          capturar a beleza natural do mar, a arquitetura das cidades e os
          detalhes únicos da antiguidade em minhas fotografias. Com a minha
          câmera, consigo registrar imagens vibrantes e cheias de personalidade.
          Uso minha habilidade em observar o mundo ao meu redor para capturar
          momentos que contam uma história e transmitem emoção. Seja durante uma
          viagem à praia ou explorando uma cidade antiga, sempre levo minha
          câmera comigo para registrar momentos únicos e inesquecíveis. Minhas
          fotos inspiram as pessoas a apreciarem as pequenas coisas da vida e a
          verem a beleza em tudo ao seu redor.
        </p>
      </AboutContainer>
    </HomeContainer>
  );
};
