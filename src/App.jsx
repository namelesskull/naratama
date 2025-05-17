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
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReviewForm from './pages/ReviewForm';
import ReviewSuccess from './pages/SuccessReview';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);
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
        <Route path='/review' element={<ReviewForm />} />
        <Route path='/review-success' element={<ReviewSuccess />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </>
  );
}
