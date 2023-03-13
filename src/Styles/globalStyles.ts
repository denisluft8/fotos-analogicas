import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Cantarell', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Cantarell:wght@400;700&display=swap');
}
*{
margin: 0;
  padding: 0;
}
html{
  min-height: 100%;
  scroll-behavior: smooth;

}
#root{
    height: 100vh;
}
body {
  background-color: #eee;
  font-family: 'Cantarell', sans-serif;
  line-height: 20px;
  min-height: 100%;
  width: 100%;

}`;
