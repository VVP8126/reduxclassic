import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAddAction, createSubAction, createIncrementAction, createDecrementAction, fetchTodosAction } from './../store/creators/sagaExampleActionCreator.js';

const Forth = () => {
  
  const dispatch = useDispatch();
  const num = useSelector(state => state.saga.num);
  const todos = useSelector(state => state.saga.todos);
  const [val, setVal] = useState(0);

  return (
    <div>
      <h1 className="centered">Example with Saga - library that works with async functions</h1>
      <div className='container'>
        <p className='centered cashStored'>Stored num: {num}</p>
        <br />
        <div className='row'>
          <div className='col33'>
            <button onClick={() => dispatch( createAddAction(val) )} 
                    className='btn blockWidth50'>
              ADD(+)
            </button>
          </div>
          <div className='col33'>
            <input  className='cashInput'
                    value={val}
                    type={'number'}
                    onChange={e => setVal(Number(e.target.value))} />
          </div>
          <div className='col33'>
            <button onClick={() => dispatch( createSubAction(val) )}
                    className='btn blockWidth50'>
              SUB(-)
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col50'>
            <button onClick={() => dispatch( createIncrementAction() )}
                    className='btn blockWidth50'>
              INCREMENT ASYNC
            </button>
          </div>
          <div className='col50'>
            <button onClick={() => dispatch( createDecrementAction() )}
                    className='btn blockWidth50'>
              DECREMENT ASYNC
            </button>
          </div>
        </div>
        <button className='btn blockWidth33'
                onClick={() => dispatch(fetchTodosAction()) }>
          Load todos ...
        </button>
      </div>
      <div className='container'>
        { todos.length > 0
            ? todos.map(t => <p key={t.id}>{t.id}. {t.title}</p>)
            : <h2 className='centered'>Todos list not found</h2>
        }
      </div>
    </div>
  );
}
export default Forth;
