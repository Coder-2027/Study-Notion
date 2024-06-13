import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = ({setLoggedin, loggedin}) => {
  return (
    <div className='navbar'>
        <div className="image">
            <Link to = "/">
                <img src="https://codehelp-router-project.netlify.app/static/media/Logo.0d90853fa1468dbe2d8d82c0ea06b8b1.svg" alt="" />
            </Link>
        </div>

        <div className="center-div">
            <Link to="/" style={{ textDecoration: 'none' }}><span>Home</span></Link>
            <Link to = "/" style={{ textDecoration: 'none' }}><span>About</span></Link>
            <Link to = "/" style={{ textDecoration: 'none' }}><span>Contact</span></Link>
        </div>

        <div className="buttons">
            {!loggedin && (
                <Link to = "/login" style={{ textDecoration: 'none' }} className='btn'>Log in</Link>
            )
            }

            {!loggedin && (
                <Link to = "/signup" style={{ textDecoration: 'none' }} className='btn'>Sign Up</Link>
            )
            }

            {loggedin && (
                <Link to = "/" onClick = {() => {toast.success('logged out successfully')
                    setLoggedin(false)}
                } style={{ textDecoration: 'none' }} className='btn'>Log out</Link>
            )
            }

            {loggedin && (
                <Link to = "/dashboard" style={{ textDecoration: 'none' }} className='btn'>Dashboard</Link>
            )
            }
        </div>
    </div>
  )
}

export default Navbar