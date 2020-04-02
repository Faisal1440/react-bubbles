import React from "react";
import { useForm } from 'react-hook-form';
import axiosWithAuth from '../auth/axiosWithAuth';



const Login = (props) => {

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    //___________________________________ make a post request to retrieve a token from the api
    
    axiosWithAuth()
      .post('/login', data)
      .then((res) => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/dash')
        
      })
      
      .catch((err) => {
        console.log(
          'src/components/Login.js: onSubmit: axiosWithAuth: .catch ERROR: ', 
          err
        )
      });

  }
  
  // when you have handled the token, navigate to the BubblePage route


  return (
    <div className = 'loginPage'>

        <h1>Welcome to the Bubble App!</h1>

        <form className= 'loginForm' onSubmit= { handleSubmit(onSubmit)}> 
          
          <label for= 'username'>Insert Username:</label>
          <input type='text' name='username' id='username' ref={register}/>

          <label for= 'password'>Insert Password:</label>
          <input type='password' name='password' id='password' ref={register}/>
          
          <input type='submit' value='Log In' className='submit' />

        </form>
      
    </div>
  );
};

export default Login;
