import {  useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import * as sessionActions from '../../store/session';
import {  Link } from 'react-router-dom';
import './LoginForm.css'
import { useHistory } from 'react-router-dom';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        dispatch(sessionActions.login({email, password}))
        .then(() => {
            history.push('/');
                        })
            .catch(async (res) => {
                
                let data;
                try {
                    data = await res.clone().json();
                    
                }
                catch {
                    data = await res.text();
                
                }
    

                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
                    
            });
    
    };

    

    const demoLogin = () => {
        const demoUser = {
        email: "demo@user.io",
        password: "password",
        };
    dispatch(sessionActions.login(demoUser));

};





    return (
        
    <div className='login-form-container'>
        <Link to={'/'}>
            <img 
            className='login-logo'
            src="/assets/logo.png" alt='black-logo'
            />
        </Link>


    <form onSubmit={handleSubmit} className="login-form"> 
        <h1 >Sign in</h1>
        <ul className='login-form-errors'>
            {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label className='login-form-label'> Email
            <input 
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
                className='login-form-input'
            />
            
        </label>
                
        <label className='login-form-label'> Password
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='login-form-input'
                placeholder='  At least 6 characters'
                    
            />
                
        </label>
        <button className="login-form-button" type='submit'>
            Sign in
        </button>

    

        <div>

        <p className="terms">
            By creating an account, you agree to Horizon's fake
            terms and conditions.
        </p>

            <div className='demo-login'>
                <div className='right-arrow-icon'></div>
                <Link to={'/'} >
                <div className="demo-login-button" type='submit'
                onClick={demoLogin}
                >
                    Sign in as demo user?
                </div>
                </Link>
            </div>
    
        </div>
        </form>
        
        <div className="divider-container">
            <div className='line-through'>
            <div className="new-account">
                New to Horizon?
            </div>
            </div>
            <div type='submit' className='signup-button'
                onClick={() =>{history.push(`/signup`)}}
                >
                    Create your Horizon account
            </div>
        </div>

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
    

                    
    
    );
}

export default LoginFormPage;




