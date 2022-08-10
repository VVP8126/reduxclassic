import { createRemoveAlbumAction } from './../store/creators/albumActionCreator.js'
import { useDispatch, useSelector  } from 'react-redux';
import { downloadAlbums } from './../async/loads.js';

const Async = () => {
  
  const dispatch = useDispatch();
  const albums   = useSelector(state => state.album.albums);

  const remove = (id) => { dispatch(createRemoveAlbumAction(id)); }
  
  return (
    <div>
      <h1 className="centered">Async functions using</h1><br />
      <h2 className="centered">Albums available</h2><br />
      <p className="margined">
        <button className="btn blockWidth50" onClick={() => dispatch(downloadAlbums())}>
            Load from server
        </button>
      </p>
      <div className="container">
        { albums.length > 0 
            ? albums.map(album => 
                <div key={album.id} className='row'>
                  <div className='col25 textRight'><p className='cashStored'>{album.id}.</p></div>
                  <div className='col50'><p className='cashStored capitalized'>{album.title}</p></div>
                  <div className='col25'>
                    <button className='btn blockWidth50' onClick={() => remove(album.id)}>REMOVE</button>
                  </div>
                </div>)
            : <h2 className='centered'>Data not found</h2>
        }
      </div>
    </div>
  );
}
export default Async;
