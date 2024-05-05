import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [userType, setUserType] = useState("CUSTOMER")

  const handleToggleForm = () => {
    setShowSignup(!showSignup)
  }

  const handleSelect = (e) => {
    setUserType(e);
  }
  
  return (
    <div className='bg-info d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-5 rounded-4 shadow-lg' style={{ width: 20 + 'rem' }}>
        <h1 className='text-center'>{showSignup ? "Sign up" : "Login"}</h1>
      <form>

      <div className='input-group'>
        <input type='text' className='form-control m-1' placeholder='User id' />
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
        <input type='password' className='form-control m-1' placeholder='Password' />
          </div>
          <div className='input-group'>
        <input type='submit' className='btn btn-info fw-bolder forn-control m-1 text-white' placeholder='User id' />
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