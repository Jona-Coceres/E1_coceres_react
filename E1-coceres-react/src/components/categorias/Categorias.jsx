import {categorias} from "../../data/categorias"
import {CategoriasContainer, CategoriasWrapper} from "./CategoriasStyles"
import Categoria from "./Categoria"

function Categorias() {
  return (
    <CategoriasWrapper>
      <h2>Discos por Categoria</h2>
      <CategoriasContainer>
        {categorias.map(cat =>(
          <Categoria key={cat.id} {...cat}/>
        ))}
      </CategoriasContainer>
    </CategoriasWrapper>
  )
}

export default Categorias