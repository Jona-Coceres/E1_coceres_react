import Button from "../UI/Button";

import {
  HeroContainerStyled,
  HeroTextContainerStyled,
  HeroImageContainerStyled,
} from "./HeroStyles";

function Hero() {
  return (
    <HeroContainerStyled>
      <HeroTextContainerStyled>
        <h1>Bienvenidos!</h1>
        <h2>DISQUERÍA ESPECIALIZADA EN VINILOS</h2>
        <p>Aprovechá nuestros envíos a todo el país!</p>
      </HeroTextContainerStyled>
      <HeroImageContainerStyled>
        <img src="https://i.ibb.co/yd3KdmH/V8-Slid2for50v2.png" alt="" />
      </HeroImageContainerStyled>
    </HeroContainerStyled>
  );
}

export default Hero;
