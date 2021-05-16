import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../store/hooks/auth.hooks'
import RegisterForm from './RegisterForm';

const Register = () => {
  const { register } = useAuth();

  const handleSubmit = (form) => {
    register(form);
  };

  return (
    <div>
      <div className="d-flex flex-column flex-row align-content-center py-5">
        <div className="container">
          <div className="row">
            <div className="section-login col-lg-6 ml-auto mr-auto">
              <h4>Register for the App</h4>
              <div className="card-login card mb-3">
                <RegisterForm
                  handleSubmit={handleSubmit}
                />
              </div>
              <div className="password-reset-link text-center">
                <Link to="/login" href="/login">
                  Already registered? Log in.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
