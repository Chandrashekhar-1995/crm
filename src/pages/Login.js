import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { userSignu, userSignin } from "../api/auth";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [userType, setUserType] = useState("CUSTOMER");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");


  const handleToggleForm = () => {
    setShowSignup(!showSignup)
  }

  const handleSelect = (e) => {
    setUserType(e);
  }

  const updateSignupData = (e) => {
    if (e.target.id === "userid") { 
      setUserId(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }

  const signupFn = (e) => {
    e.preventDefault()
    console.log("Signup button trigger");
  }

  const loginFn = (e) => {
    e.preventDefault()
    const data = {
      userId,
      password
    }

    userSignin(data).then((Response) => {
      console.log(Response);
    }).catch((error) => {
      console.log(error);
    })
  }
  
  return (
    <div className='bg-info d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-5 rounded-4 shadow-lg' style={{ width: 20 + 'rem' }}>
        <h1 className='text-center'>{showSignup ? "Sign up" : "Login"}</h1>
      <form onSubmit={showSignup ? signupFn : loginFn}>

      <div className='input-group'>
        <input type='text' className='form-control m-1' id="userid" placeholder='User id' value={userId} onChange={updateSignupData}/>
          </div>

          {showSignup &&
            <>
            <div className='input-group'>
        <input type='text' className='form-control m-1' placeholder='Name' />
        </div>
            <div className='input-group'>
        <input type='email' className='form-control m-1' placeholder='Email' />
            </div>
            <div className="d-flex justify-content-between m-1" >
              <span className="my-1">User Type</span>
              <DropdownButton
                align="end"
                title={userType}
                id="userType"
                variant="dark"
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="CUSTOMER">CUSTOMER</Dropdown.Item>
                <Dropdown.Item eventKey="ENGINEER">ENGINEER</Dropdown.Item>
              </DropdownButton>
            </div>
            </>
          }
        
        <div className='input-group'>
        <input type='password' className='form-control m-1' placeholder='Password' id="password" value={password} onChange={updateSignupData}/>
          </div>
          <div className='input-group'>
            <input type='submit' className='btn btn-info fw-bolder form-control m-1 text-white' value={showSignup ? "Sign Up" : "Log In"} />
          </div>
          <div className="m-1 text-center text-primary" onClick={handleToggleForm}>
            {showSignup ? "Already have an account ? Login" : "Don't have an account? Sign up"}
          </div>
        </form>  
      </div>
    </div>
  )
}

export default Login;