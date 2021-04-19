import React, { useState } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.componenet';
import FormInput from '../form-input/form-input.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCreadetntials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCreadetntials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCreadetntials, [name]: value });
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and passowrd</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    value={email} 
                    handleChange={handleChange} 
                    label="email"
                    required
                />
                <FormInput 
                    name="password" 
                    value={password} 
                    handleChange={handleChange} 
                    label="password"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);
