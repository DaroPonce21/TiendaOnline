import React from 'react'
import'./CSS/LoginSingup.css'

const LoginSingup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sing Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" name="" id="" placeholder='Email Address' />
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingup