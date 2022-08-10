import paths from './../../paths/paths.js';
import MenuItem from './item/MenuItem';

const Menu = () => {
  return (
    <div className="row">
      { paths.map(item => <MenuItem key={item.path} path={item.path} lbl={item.lbl} />) }
    </div>
  );
}
export default Menu;
