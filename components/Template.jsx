import React from 'react'
import { FcGoogle } from "react-icons/fc";
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const Template = ({title, desc1, desc2, btnText, image, formType, setLoggedin}) => {
  return (
    <div className="card">
        <div className="left">
            <h1>{title}</h1>
            <div className="desc1">{desc1}</div>
            <div className="desc2">{desc2}</div>

            <div className="form">
                {formType === 'login' ? (<LoginForm setLoggedin = {setLoggedin}/>) : (<SignupForm setLoggedin = {setLoggedin}/>)}
            </div>



            <div className="or">
                <div></div>
                <p className="txt">OR</p>
                <div></div>
            </div>

            <button className="google">
                <span><FcGoogle/></span>
                <div className="txt">Sign in with Google</div>
            </button>
        </div>

        <div className="right">
                <img src={image} alt="" className='first'/>
                <img src="https://codehelp-router-project.netlify.app/static/media/frame.3a238e5f26d676376e1d.png" alt="" className='second'/>
        </div>
    </div>
  )
}

export default Template