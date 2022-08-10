import { NavLink } from 'react-router-dom';

const MenuItem = ( {path, lbl} ) => {
    return <NavLink className="col25 menuItem" to={path} >{lbl}</NavLink>
}
export default MenuItem;
