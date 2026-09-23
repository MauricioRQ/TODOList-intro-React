// ReactComponent nos permite importar nuestros iconos desde un archivo externo
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

//objeto que contiene los dos iconos
const icontypes = {
    "check": (color) => <CheckSVG 
    className='Icon-svg' fill={color} />,
    "delete": (color) => <DeleteSVG className='Icon-svg' fill={color} />,
};

//El componente recibe el type del icono (check o delete)
function TodoIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-container Icon-container-${type}`} //Segun el type que recibe autocompleta la propiedad className(Icon-{check o delete})
            onClick = {onClick}
        >
            {icontypes[type] (color)} {/*Mostramos el icono segun el type (check o delete) */}
        </span>
    )
}

export { TodoIcon };