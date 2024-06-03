import { Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Home from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Admin } from './pages/Admin/Admin';
import ProtectedRoutes from './middleware/ProtectedRoutes';
import { Login } from './pages/Login';
import LinkPage from './pages/Link';
import WhatsAppRedirect from './pages/WhatsappRedirect';
import { UserForm } from './pages/UserForm';
import { Success } from './pages/Success';

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Header />}>
          <Route path='*' element={<NotFound />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='/link' element={<LinkPage />} />
        <Route
          path='/admin'
          element={
            <ProtectedRoutes>
              <Admin />
            </ProtectedRoutes>
          }
        />
        <Route
          path='/whatsapp/:noHp/:name/:kampus/:paket/:sesi/:lokasiFoto/:fotografer/:link'
          element={<WhatsAppRedirect />}
        />
        <Route path='/form' element={<UserForm />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </>
  );
}
