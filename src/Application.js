import './styles/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Page404 from './page/Page404';
import Layout from './components/layout/Layout';
import paths from './paths/paths.js';

// Application uses 2 variants of work with async-function:
// 1) lib redux-thunk (page ASYNC) - see commented line 27 in file store.js (uncomment for use)
// 2) lib saga - activated (page SAGA in web browser)

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> } >
          <Route index element={<Home />} />
          { paths.map(item => <Route key={item.path} path={item.path} element={item.element} />) }
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Application;
