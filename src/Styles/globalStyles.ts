import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Hind Siliguri', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
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
  font-family: 'Hind Siliguri', sans-serif;
  min-height: 100%;
  width: 100%;

}`;
