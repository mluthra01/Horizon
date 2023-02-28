// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import * as sessionActions from  "../../store/session";
// // import { Redirect } from "react-router-dom";
// import './SignUpForm.css'

// const SignUpFormPage = () => {

//     const dispatch = useDispatch();
//     // const sessionUser = useSelector(state => state.session.user);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [name, setName] = useState("");
//     const [errors, setErrors] = useState([]);

//     // if (sessionUser) return <Redirect to="/" />;

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (password === confirmPassword) {
//             setErrors([]);
//             return dispatch(sessionActions.signup({name, email, password}))
//                 .catch(async (res) => {
//                     let data;
//                     try {
//                         data = await res.clone().json();
//                     }
//                     catch {
//                         data = await res.text();
//                     }
//                     if (data?.errors) setErrors(data.errors);
//                     else if (data) setErrors([data]);
//                     else setErrors([res.statusText]);
//                 });
//         }
//             return setErrors(['Passwords do not match'])
//     }

//     return (
//         <div className="signup-form-container">
//             <img 
//                 className='signup-logo'
//                 src="/logo.png" alt='black-logo'
//             />
//             <form onSubmit={handleSubmit} className="signup-form">
//                 <h1>Create account</h1>
//                 <ul className="signup-form-errors">
//                     {errors.map(error => <li key={error}></li>)}
//                 </ul>
//                 <label className="signup-form-label"> Name
//                     <input
//                         type='text'
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                         className='signup-form-input'
//                         />
//                 </label >
//                 <label  className="signup-form-label"> Email
//                     <input 
//                     type='text'
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className='signup-form-input'
//                     />
//                 </label>
//                 <label  className="signup-form-label"> Password
//                     <input 
//                     type='password' 
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     className='signup-form-input'
//                     />
//                 </label>
//                 <label className="signup-form-label"> Re-enter Password
//                     <input 
//                     type='password'
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     required
//                     className='signup-form-input'
//                     />
//                 </label>
//                 <button  className="signup-form-button">Sign Up</button>
//             </form>
//         </div>
//     )
// }

// export default SignUpFormPage