import styled, { keyframes } from "styled-components";
import BaseAnimation from "./BaseAnimation.styles";

const GradientTitle = keyframes`
0%{background-position: 0 50%}
50%{background-position: 100% 50%}
100%{background-position:0 50%}
`;

const AnimatedGradientTitle = styled(BaseAnimation)`
  animation-name: ${GradientTitle};
  text-align: center;
  font-family: "Fredoka One", cursive;
  font-size: 36px;
  padding: 20px;
  background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  background-size: 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export { AnimatedGradientTitle };
