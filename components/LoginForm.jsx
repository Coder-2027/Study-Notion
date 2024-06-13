import React from 'react'
import { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = ({setLoggedin}) => {
    const navigate = useNavigate();

    const [FormData, setformdata] = useState({
        email : "",
        password : ""
    })

    const [showPassword, setshowPassword] = useState(false)

    function changeHandler(event){
        setformdata((prev) => ({
            ...prev,
            [event.target.name] : event.target.value
        }
        ))
        // console.log(FormData);
    }

    function submitHandler(event){
        // console.log('hello');
        event.preventDefault();
        console.log(FormData);
        setLoggedin(true);
        toast.success('logged in');
        navigate('/dashboard')
    }

  return (
    <form onSubmit = {submitHandler}>
        <div className="email">
            <label htmlFor="email">Email Address</label>
            <span className='asterik'>*</span><br />
            <input type="email" name="email" id="email" value = {FormData.email} onChange={changeHandler} placeholder='Enter Email Address' required/>
        </div>

        <div className="password">
            <label htmlFor="password">Password</label>
            <span className='asterik'>*</span><br />
            <input
                type = {showPassword ? ('text') : ('password')}
                name= 'password'
                id='password'
                value = {FormData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                required
            />
            <span className='eye'>
                {showPassword ? 
                (<AiOutlineEyeInvisible onClick={() => (
                    setshowPassword(!showPassword)
                )}/>) 
                
                : 
                
                (<AiOutlineEye onClick={() => (
                    setshowPassword(!showPassword)
                )}/>) }
            </span>
            <div className="forgot">Forgot Password?</div>
        </div>
        <button className="btn-form">
            Sign In
        </button>
    </form>
  )
}

export default LoginForm