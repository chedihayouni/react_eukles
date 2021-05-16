import React from 'react';
import LoginForm from './LoginForm';
import { useAuth} from '../../store/hooks/auth.hooks'

const Home = () => {
  const { login} = useAuth();

  const handleSubmit = (form) => {
    login(form);
  };

  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-md-center py-5">
        <div className="container">
          <div className="row">
            <div className="section-about col-lg-6 mb-4 mb-lg-0">
              <div>
                <h2>Example To Do App</h2>
              </div>
            </div>
            <div className="section-login col-lg-6">
              <h4>Log in to the App</h4>

              <div className="card-login card mb-3">
                <div className="card-body">
                  <LoginForm
                    handleSubmit={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
