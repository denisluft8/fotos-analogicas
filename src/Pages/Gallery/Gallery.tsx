import { GalleryContainer, GalleryDiv } from "./Gallery.styles";
import { photos } from "./photos";
import { GalleryImgs } from "../../Components/GalleryImgs/GalleryImgs";

export const GalleryPage = () => {
  return (
    <GalleryContainer>
      <GalleryDiv>
        <GalleryImgs images={photos}/>
      </GalleryDiv>
    </GalleryContainer>
  );
};
