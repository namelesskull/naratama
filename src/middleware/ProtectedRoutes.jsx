import { useAuth } from '../stores/AuthStore';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProtectedRoutes({ children }) {
  let { token } = useAuth();
  if (!token) {
    return <Navigate to='/login' />;
  }

  return children;
}

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
