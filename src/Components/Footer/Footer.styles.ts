import styled from "styled-components";

export const FooterSection = styled.section`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 72px;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  & > p {
    font-size: 12px;

    text-align: center;
    & > a {
      color: #000;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  & > h4 {
    text-align: center;
    font-weight: normal;
    height: min-content;
  }
  & > a {
    & > img {
      height: fit-content;
      width: 60px;
    }
  }
`;
