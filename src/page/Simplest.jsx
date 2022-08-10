import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Simplest = () => {
  
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const [value, setValue] = useState(0);
  
  return (
    <div>
      <h1 className="centered">Simplest example - single number storing</h1>
      <div className='container'>
        <p className='centered cashStored'>Cash stored: {cash}</p>
        <br />
        <div className='row'>
          <div className='col33'>
            <button onClick={() => dispatch( {type:"ADD_CASH", payload:value} )} 
                    className='btn blockWidth50'>
              ADD(+)
            </button>
          </div>
          <div className='col33'>
            <input  className='cashInput'
                    value={value}
                    type={'number'}
                    onChange={e => setValue(Number(e.target.value))} />
          </div>
          <div className='col33'>
            <button onClick={() => dispatch( {type:"GET_CASH", payload:value} )}
                    className='btn blockWidth50'>
              SUB(-)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Simplest;
