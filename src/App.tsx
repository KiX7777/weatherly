import { Route, Routes } from 'react-router-dom';
import './index.css/';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='today' element={<p>Today</p>} />
      </Route>
      ;
    </Routes>
  );
}

export default App;
