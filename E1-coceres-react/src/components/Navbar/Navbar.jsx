import {
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
  UserContainerStyled,
  SpanStyled,
  MenuContainerStyled,
  HomeContainerStyled,
} from "./NavbarStyles";

import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <div>
      <NavbarContainerStyled>
        <div>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e6/Vinyl_Disc.png"
              alt=""
            />
          </a>
        </div>
        <LinksContainerStyled>
          <HomeContainerStyled>
            <a href="#">
              <LinkContainerStyled>Home</LinkContainerStyled>
            </a>
            <a href="#">
              <LinkContainerStyled>Vinilos</LinkContainerStyled>
            </a>
          </HomeContainerStyled>

          <UserNavStyled>
            <UserContainerStyled>
              <FaUserAlt />
              <SpanStyled>Iniciar Sesión</SpanStyled>
            </UserContainerStyled>
          </UserNavStyled>
          <MenuContainerStyled>
            <AiOutlineMenu />
          </MenuContainerStyled>
        </LinksContainerStyled>
      </NavbarContainerStyled>
    </div>
  );
}

export default Navbar;
