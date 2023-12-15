import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Error, Register, Dashboard } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='Landing' element={<Landing />} />
        <Route path='Register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
