import { useSelector } from 'react-redux'

function Menu(){
    const stateTitulo = useSelector((state) =>
    state.artistasTitulo.titulo
    )
    return(
        <div>{stateTitulo}</div>
    )
}

export default Menu
