
import {BrowserRouter , Routes ,Route} from 'react-router-dom';
import './sass/base.scss';
import './sass/global.scss';

import Home from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
