import Simplest from '../page/Simplest';
import Array    from '../page/Array';
import Async    from '../page/Async';
import Saga     from '../page/Saga';

const paths = [
    {path:"simplest", element: <Simplest />, lbl:"Simplest"},
    {path:"array",    element: <Array />,    lbl:"Array"   },
    {path:"async",    element: <Async />,    lbl:"Async"   },
    {path:"saga",     element: <Saga />,     lbl:"Saga"    }
];
export default paths;
