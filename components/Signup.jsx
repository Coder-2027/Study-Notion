import React from 'react'
import Template from './Template'

const Signup = ({setLoggedin}) => {
  return (
    <Template
        title = {'Join the millions learning to code with StudyNotion for free'}
        desc1 = {'Build skills for today, tomorrow, and beyond.'}
        desc2 = {'Education to future-proof your career.'}
        btnText = {'Create Account'}
        image = {'https://codehelp-router-project.netlify.app/static/media/signup.b431d919de01b6515dd6.png'}
        formType={'signup'}
        setLoggedin = {setLoggedin}
    />
  )
}

export default Signup