import React from 'react'
import { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupForm = ({setLoggedin}) => {
    const navigate = useNavigate();

    const [createPassword, setcreatePassword] = useState(false);
    const [confirmpassword, setconfirmpassword] = useState(false);

    const [FormData, setformdata] = useState({
        firstname : '',
        lastname : '',
        email : '',
        createPassword : '',
        confirmpassword : '',
    })

    function submitHandler(event){
        event.preventDefault();
        if(FormData.createPassword != FormData.confirmpassword){
            toast.warning('Password do not match');
            return;
        }
        toast.success('Account created successfully')
        console.log(FormData);
        setLoggedin(true);
        navigate('/dashboard');
    }

    function changeHandler(event){
        setformdata((prev) => ({
            ...prev,
            [event.target.name] : event.target.value
        }
        ))
    }

  return (
    <form onSubmit={submitHandler} className='sign-form'>
        <div className="select">
            <input type="radio" name="choice" id="student" checked/>
            <label htmlFor="student">Student</label><br />

            <input type="radio" name="choice" id="instructor" />
            <label htmlFor="instructor">Instructor</label><br />
        </div>

        <div className="name">
            <div className="firstName">
                <label htmlFor="firstname">First Name</label>
                    <span>*</span><br />
                <input type="text" name="firstname" id="firstname" value = {FormData.firstname} onChange={changeHandler} 
                placeholder='Enter first name' required/><br />
            </div>

            <div className="lastName">
                <label htmlFor="lastname">Last Name</label>
                    <span>*</span><br />
                <input type="text" name="lastname" id="lastname" value = {FormData.lastname} onChange={changeHandler}
                placeholder='Enter last name' required/><br />
            </div>
        </div>

        <div className="email">
            <label htmlFor="email">Email Address</label>
                <span>*</span><br />
            <input type="email" name="email" id="email" value = {FormData.email} onChange={changeHandler} placeholder='Enter Email Address' required/><br />
        </div>

        <div className="Password">
            <div className="create">
                <label htmlFor="createPassword">Create Password</label>
                <span>*</span><br />
                <input
                    type = {createPassword ? ('text') : ('password')}
                    name= 'createPassword'
                    id='createPassword'
                    value = {FormData.createPassword}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    required
                />
                <span className='eye-form'>
                    {createPassword ? 
                    (<AiOutlineEyeInvisible onClick={() => (
                        setcreatePassword(!createPassword)
                    )}/>) 
                    
                    : 
                    
                    (<AiOutlineEye onClick={() => (
                        setcreatePassword(!createPassword)
                    )}/>) }
                </span><br />
            </div>

            <div className="confirm">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <span>*</span><br />
                <input
                    type = {confirmpassword ? ('text') : ('password')}
                    name= 'confirmpassword'
                    id='confirmpassword'
                    value = {FormData.confirmpassword}
                    onChange={changeHandler}
                    placeholder='Enter Confirm Password'
                    required
                />
                <span className='eye-form'>
                    {confirmpassword ? 
                    (<AiOutlineEyeInvisible onClick={() => (
                        setconfirmpassword(!confirmpassword)
                    )}/>) 
                    
                    : 
                    
                    (<AiOutlineEye onClick={() => (
                        setconfirmpassword(!confirmpassword)
                    )}/>) }
                </span><br />
            </div>
        </div>

        <button className='btn-form'>Create Account</button>
    </form>
  )
}

export default SignupForm