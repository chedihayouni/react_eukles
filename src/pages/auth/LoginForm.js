import React from 'react';
import { Link } from 'react-router-dom';
import Formsy from 'formsy-react'
import TextFieldFormsy from '../../common/FormsyTextField'

const LoginForm = (props) => {
  const {
    handleSubmit,
  } = props;

  return (
    <div>
      <Formsy
        className="flex flex-col"
        method="POST"
        onSubmit={handleSubmit}
      >
        <TextFieldFormsy
          id="email"
          className="form-control"
          type="email"
          name="email"
          label="Email"
          validations='isEmail'
          validationErrors={{
            isEmail: 'Wrong email',
          }}
          variant="outlined"
          required
        />
        <TextFieldFormsy
          id="password"
          className="form-control mt-5"
          type="password"
          name="password"
          label="Password"
          validations={{
            minLength: 6,
          }}
          validationErrors={{
            minLength: "At least 6 characters",
          }}
          variant="outlined"
          required
        />

        <div className="form-group text-center">
          <button
            type="submit"
            className="btn btn-primary mt-5"
          >
            Sign In
          </button>
        </div>

        <div className="login-invite-text text-center">
          No account?
          {' '}
          <Link to="/register" href="/register">
            Register
          </Link>
        </div>
      </Formsy>
    </div>
  );
}

export default LoginForm;
