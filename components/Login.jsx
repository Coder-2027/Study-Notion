import React from 'react'
import Template from './Template'

const Login = ({setLoggedin}) => {
  return (
    <Template
        title = {'Welcome Back'}
        desc1 = {'Build skills for today, tomorrow, and beyond.'}
        desc2 = {'Education to future-proof your career.'}
        btnText = {'Sign In'}
        image = {'https://codehelp-router-project.netlify.app/static/media/login.4d877a447365e5137b67.png'}
        formType={'login'}
        setLoggedin = {setLoggedin}
    />
  )
}

export default Login