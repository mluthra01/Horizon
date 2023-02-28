// import {  useState } from 'react';
// import {useDispatch, useSelector} from 'react-redux'
// import * as sessionActions from '../../store/session';
// import { Redirect } from 'react-router-dom';
// import './LoginForm.css'
// import { useRef } from 'react';

// const LoginFormPage = () => {
//     const dispatch = useDispatch();
//     const sessionUser = useSelector(state => state.session.user);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errors, setErrors] = useState([]);

//     // if (sessionUser) return <Redirect to='/' />;

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setErrors([]);
//         return dispatch(sessionActions.login({email, password}))
//             .catch(async (res) => {
//                 let data;
//                 try {
//                     data = await res.clone().json();
//                 }
//                 catch {
//                     data = await res.text();
//                 }
//                 if (data?.errors) setErrors(data.errors);
//                 else if (data) setErrors([data]);
//                 else setErrors([res.statusText]);
//             });
//     };



//     return (

        
//         <div className='login-form-container'>
//             <img 
//                 className='login-logo'
//                 src="/logo.png" alt='black-logo'
//             />

//         <form onSubmit={handleSubmit} className="login-form"> 
//             <h1 >Sign In</h1>
//             <ul className='login-form-errors'>
//                 {errors.map(error => <li key={error}></li>)}
//             </ul>
//             <label className='login-form-label'> Email
//                 <input 
//                     type='text'
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)} 
//                     required
//                     className='login-form-input'

//                 />
//             </label>
//             <label className='login-form-label'> Password
//                 <input
                    
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     className='login-form-input'
//                     placeholder='  At least 6 characters'
                    
//                 />
//             </label>
//             <button className="login-form-button" type='submit'>Sign In</button>
//         </form>
//     </div>
//     );


// export default LoginFormPage;