import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from  "../../store/session";
import { Redirect, Link, useHistory } from "react-router-dom";
import './SignUpForm.css'

const SignUpFormPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const buttonText = email.length > 0 ? 'Verify Email' : 'Continue'
    if (sessionUser) return <Redirect to="/" />;


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({name, email, password}))
                        .then(() => {
                        history.push('/');
                                        })

                .catch(async (response) => {
                let data;
                    try {
                        data = await response.clone().json();
                    }
                    catch {
                        data = await response.text();
                    }
                    if (data && data.errors) {
                        setErrors(data.errors) 
                    }
                    else if (data) {
                        setErrors( [data]);
                    }
                    else {
                        setErrors([ response.statusText]);
                    }
                });
        };
            
            return setErrors(['Passwords do not match'])
    };



    return (
        <div className="signup-form-container">
            <Link to={'./'}>
            <img 
                className='signup-logo'
                src="/assets/logo.png" alt='black-logo'
            />
            </Link>
            
            <form onSubmit={handleSubmit} className="signup-form">
                <h1>Create account</h1>
                <ul className="signup-form-errors">
                    {errors.map(error => <li key={error}>{error}<br/></li>)}
                </ul>
                <label className="signup-form-label">Your name
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        // required
                        placeholder='First and last name'
                        className='signup-form-input'
                        />
                </label >
                <label  className="signup-form-label"> Email
                    <input 
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // required
                    className='signup-form-input'
                    />
        
                </label>
    
                <label  className="signup-form-label"> Password
                    <input 
                    type='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    // required
                    placeholder='At least 6 characters'
                    className='signup-form-input'
                    />
                    <div className="password-show-error">
                        <div className="error-icon"></div>
                        <div className='always-show-error'>Passwords must be at least 6 characters. </div>
                    </div>
                    
                </label>
                <label className="signup-form-label"> Re-enter Password
                    <input 
                    type='password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    // required
                    className='signup-form-input'
                    />
                </label>
                <button  className="signup-form-button">{buttonText}</button>


                <div>

        <div className="signup-terms">
            By creating an account, you agree to Horizon's fake
            <div type='submit'>terms and conditions.</div> 
        </div>
            <div className="break-between"></div>
            <div className='demo-login'>
                <span className="have-account">Already have an account?</span> 
                <Link to={'/login'}>
                <div className="demo-login-button" type='submit'>
                    Sign in
                </div>
                </Link>
                <div className='right-arrow-icon'></div>
                {/* </button> */}
            </div>
    
        </div>
            </form>
        
        {/* <div className="divider-container">
            <div className="new-account">
                New to Horizon?
            </div>
            <Link to="/signup">
                <button type="submit" className="signup-button">
                    Create your Horizon account
                </button>
            </Link> 
        </div> */}


            <div className='footer'>
                <div className='footer-line' />
                <div className='links'>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/madhur-luthra-08a53a126/">LinkedIn</a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/mluthra01">GitHub</a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/mluthra01/Horizon">Project repo</a>
                </div>
                <div className='copyright'>
                        Amazon Clone by <a href="https://github.com/mluthra01">Madhur Luthra</a> 
                </div>
            </div>




            
            
        </div>
    )
}

export default SignUpFormPage