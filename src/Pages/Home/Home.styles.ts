import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 52px;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  gap: 12px;
  max-width: 1200px;

  & > p {
    text-align: center;
  }

  & > img {
    height: 180px;
    border-radius: 50%;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);

    @media (max-width: 375px) {
      height: 160px;
    }
  }
`;
