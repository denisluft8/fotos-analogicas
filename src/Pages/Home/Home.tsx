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
        <h2>Fotos Analógicas</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper
          risus diam, sit amet lobortis augue sagittis vitae. Integer maximus
          lacus lorem. Duis dui magna, gravida quis dictum vel, congue vel
          metus. Nam sodales quis ligula vitae porttitor. Phasellus tempor nibh
          gravida ipsum placerat, nec aliquet enim elementum. Aliquam feugiat
          elementum accumsan. Etiam interdum non augue ut blandit. Morbi
          sagittis, purus a tincidunt feugiat, elit tortor commodo diam, at
          aliquam magna odio dignissim magna. Mauris ac diam id sapien
          consectetur fermentum id et tellus. Donec nec porta leo, nec porttitor
          est. Mauris mauris orci, volutpat a turpis sit amet, faucibus
          hendrerit quam. Aliquam ut convallis leo, quis efficitur magna.
          Aliquam malesuada venenatis orci, nec sollicitudin ipsum porttitor
          vel.
        </p>
      </AboutContainer>
    </HomeContainer>
  );
};
