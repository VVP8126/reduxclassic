import Simplest from '../page/Simplest';
import Array    from '../page/Array';
import Async    from '../page/Async';
import Forth    from './../page/Forth';

const paths = [
    {path:"simplest", element: <Simplest />, lbl:"Simplest"},
    {path:"array",    element: <Array />,    lbl:"Array"   },
    {path:"async",    element: <Async />,    lbl:"Async"   },
    {path:"forth",    element: <Forth />,    lbl:"Forth"   }
];
export default paths;
