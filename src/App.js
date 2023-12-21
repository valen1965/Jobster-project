import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Error, Register, ProtectedRoute } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from './pages/dashboard/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='Landing' element={<Landing />} />
        <Route path='Register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' autoClose='1000' />
    </BrowserRouter>
  );
}

export default App;
