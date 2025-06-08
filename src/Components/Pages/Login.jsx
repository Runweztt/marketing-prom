import React from 'react'
import { FcGoogle } from "react-icons/fc";

function Login() {




    
    return (
        <>
            <section>
             <div className="form-container">
                   <div className="form-group">
                      <h1>Welcome</h1>
                      <p>login to your account</p>
                
                <form >

                   
                    <label> email</label>
                    <input type="email" placeholder='enter your email address ' required />
                    <label> password</label>
                    <input type="password" placeholder='create a password ' required />

                    <button type='submit'>login</button>
                    <button type='submit'>
                        <FcGoogle className='googleicon' />
                        continue with google
                    </button>


                </form>
                </div>
             </div>
            </section>


        </>
    )
}

export default Login