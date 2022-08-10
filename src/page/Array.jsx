import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { /*ADD_CUSTOMER*/ REMOVE_CUSTOMER } from '../utils/constants.js';
import addCustomerActionCreator from '../store/creators/customerActionCreator.js';

const Array = () => {
  
  const dispatch = useDispatch();
  const customers = useSelector(state => state.customer.customers);

  const [val, setVal] = useState();
  const onChange = e => { setVal(e.target.value); }

  const remove = (id) => {
    dispatch({type: REMOVE_CUSTOMER, payload: id});
  }

  const add = (val) => {
    dispatch(addCustomerActionCreator(val)); // or so: {type: ADD_CUSTOMER, payload: val}
  }

  return (
    <div>
      <h1 className="centered">Example with stored array</h1><br />
      <div className='container'>
        {customers.length > 0 
            ? <div>
                <h2 className='centered'>Elements in Store:</h2>
                { customers.map(c =>
                    <div className='row' key={c.id} >
                        <div className='col50'>
                            <p className='fontSize24'>{c.id}. {c.value}</p>
                        </div>
                        <div className='col50'>
                            <button className='btn blockWidth33' onClick={() => remove(c.id)}>REMOVE</button>
                        </div>
                    </div>)
                }
              </div>
            : <h2 className='centered'>Elements not found !</h2> }
        <hr />
        <br />
        <input className='cashInput' onChange={onChange} />
        <br />
        <button onClick={() => add(val)} className="btn blockWidth33">ADD NEW</button>
      </div>
    </div>
  );
}
export default Array;
