import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className='main'>
    <body className='bg'></body>
        <div className="login" >
            <div className="login__container">
                {/* <img
                    src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
                    alt=""
                /> */}

                <h1 className='signin'>Login</h1>
                
                <button>Sign in with Google</button>
                <p>OR</p>
             <div className='form'>
                <form id="email">
              
              <input classname="email" style={{width: '270px',padding:"8px 10px",color:"black",height:"30px", borderRadius:"15px",backdropFilter:"blur(5px)", backgroundColor:"red", border:"none"}} name="email" type="email" required placeholder="Email" />
            </form>

            <form id="password">
              
              <input classname="password" style={{width: '270px',position:"relative",padding:"8px 10px",color:"white",height:"30px", borderRadius:"15px",backdropFilter:"blur(5px)", backgroundColor:"rgb(56, 56, 56)", border:"none"}} name="password" type="password"  required placeholder="Password" />
            </form>

            
            
            </div>
            <button className='signup'>Login</button>
            
            <p>Forgot password?</p>
            <p>Already using Slack?</p>
            <a to="/Signin" style={{padding:"12px", textDecoration:"none",  margin: "12px", color:"pink"}}>Sign In to an existing workspace</a>
            </div>
        </div >
        
    </div>
  )
}
