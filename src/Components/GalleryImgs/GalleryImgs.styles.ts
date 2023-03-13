import styled from "styled-components";

export const GalleryWrap = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  @media (max-width: 500px) {
    /* flex-wrap: nowrap; */
    /* flex-direction: column; */
    gap: 6px;
    width: 100%;
  }
`;

export const SingleImg = styled.div`
  cursor: pointer;
  width: 30%;

  & > img {
    border: none;
    border-radius: 2px;
    max-width: 100%;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
  & > img:hover {
    transform: scale(1.02);
    transition: 0.4s ease;
    -webkit-filter: none; /* Safari 6.0 - 9.0 */
    filter: none;
  }
  @media (max-width: 500px) {
    width: 45%;
    & > img {
      border: none;
      border-radius: 2px;
      max-width: 100%;
    }
  }
`;

export const SliderWrap = styled.div`
  align-items: center;
  background-color: #191818d9;
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 999;

  & .btnClose,
  .btnPrev,
  .btnNext {
    color: #fff;
    cursor: pointer;
    height: 24px;
    opacity: 0.8;
    position: fixed;
    z-index: 9999;
  }

  & .btnClose:hover,
  .btnPrev:hover,
  .btnNext:hover {
    opacity: 1;
  }

  & > .btnClose {
    top: 20px;
    right: 20px;
  }

  & > .btnPrev {
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  & > .btnNext {
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  & > p {
    color: white;
  }
`;

export const FullScreenImage = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    max-height: 100%;
    max-width: 100%;
    pointer-events: none;
    user-select: none;
  }
`;
