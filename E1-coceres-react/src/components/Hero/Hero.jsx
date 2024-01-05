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
        <h1>Si tenes Zappi</h1>
        <h2>tenes Nucba</h2>
        <p>Busca lo que quieras y Nucba te quedes sin comida</p>
      </HeroTextContainerStyled>
      <HeroImageContainerStyled>
        <img src="https://i.ibb.co/yd3KdmH/V8-Slid2for50v2.png" alt="" />
      </HeroImageContainerStyled>
    </HeroContainerStyled>
  );
}

export default Hero;
