import styled from "styled-components";

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  gap: 30px;

  h1 {
    margin-bottom: 2rem;
  }

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

export const HeroTextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  h1 {
    font-size: 4rem;
    margin: 10px 0;
  }
  h2 {
    font-size: 2.5rem;
    margin: 10px 0;
  }
  p {
    font-size: 1.2rem;
  }
  @media (max-width: 968px) {
    width: 88%;
    align-items: center;
    text-align: center;
  }
`;

export const HeroImageContainerStyled = styled.div`
  width: 60%;
  padding-top: 30px;
  img {
    width: 100%;
  }

  @media (max-width: 960px) {
    display: none;
  }
`;
