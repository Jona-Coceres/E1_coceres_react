import styled from "styled-components";

import { motion } from "framer-motion";
export const CategoriasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 15px;
  padding: 0 30px 30px 30px;
  background-color: #f7f7f7;
  @media (max-width: 768px) {
    padding-top: 30px;
    text-align: center;
  }
`;

export const CategoriasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  user-select: none;
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 190px;
  padding: 1.2rem 0.5rem;
  background-color: ${({ selected }) =>
    selected ? "var(--orange-bg)" : "var(--card-grey)"};
  border-radius: 5px;
  cursor: pointer;
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    color: #554e4a;
  }
  h2:hover {
    color: #ff8a3c;
    transition: 0.2s;
  }

  img {
    width: 160px;
    border-radius: 3px;
  }
  img:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    transition: 0.2s;
  }
`;

export const BorderDecoration = styled.div`
  height: 5px;
  width: 30%;
  background: var(--btn-gradient);
  border-radius: 15px;
`;
