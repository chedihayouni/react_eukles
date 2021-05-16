import React from 'react';
import Formsy from 'formsy-react'
import TextFieldFormsy from '../../common/FormsyTextField'

const RegisterForm = (props) => {
    const {
        handleSubmit,
    } = props;

    return (
        <div className="card-body">
            <Formsy
                className="form-horizontal"
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
                    id="name"
                    className="form-control mt-5"
                    type="text"
                    name="name"
                    label="Name"
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
                <TextFieldFormsy
                    id="password_confirmation"
                    className="form-control mt-5"
                    type="password"
                    name="password_confirmation"
                    label="Confirm password"
                    validations={{
                        equalsField: 'password',
                        minLength: 6,
                    }}
                    validationErrors={{
                        equalsField: 'Passwords do not match',
                        minLength: "At least 6 characters",
                    }}
                    variant="outlined"
                    required
                />
                <div className="form-group text-center">
                    <button
                        type="submit"
                        className="btn btn-primary mt-5 "
                    >
                        Register
                    </button>
                </div>
            </Formsy>
        </div>
    );
}

export default RegisterForm;
