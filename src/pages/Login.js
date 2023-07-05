import { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function Login() {
    const [showSignup, setShowSignup] = useState(false);
    const [userType, setUserType] = useState("CUSTOMER");

    const toggleSignup=()=>{
        setShowSignup(!showSignup)
    }

    const handleSelect=(e)=>{
        setUserType(e)
    }
    return(
        <div className="bg-info d-flex justify-content-center align-items-center vh-100">
            <div className="card p-5 rounded-4 shadow-ls" style={{width : 20 + 'rem'}}>
                <h4 className="text-center text-info">{showSignup ? "Sign Up" : "Login"}</h4>
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control m-1" placeholder="User id"/>
                    </div>
                    <>
                    <div className="input-group">
                        <input type="text" className="form-control m-1" placeholder="User Name"/>
                    </div>
                    <div className="input-group">
                        <input type="email" className="form-control m-1" placeholder="Email"/>
                    </div>
                    <div className="d-flex justify-content-between m-1">
                    <span className="my-1">User Type</span>
                        <DropdownButton
                        align='end'
                        title={userType}
                        id="userType"
                        variant="light"
                        onSelect={handleSelect}>
                            <Dropdown.Item eventKey="Customer">CUSTOMER</Dropdown.Item>
                            <Dropdown.Item eventKey="ENGINEER">ENGINEER</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    </>
                    <div className="input-group">
                        <input type="password" className="form-control m-1" placeholder="Password"/>
                    </div>
                    <div className="input-group d-flex justify-content-center align-items-center">
                        <input type="submit" className="btn btn-info fw-bolder" onClick={toggleSignup} value={showSignup ? "Sign Up" : "Login"}/>
                    </div>
                    <div className="m-1 text-center text-primary" onClick={toggleSignup}>{showSignup ? "Already have an Account Login" : " Don't have an Account Sign Up" }</div>
                </form>
            </div>
        </div>
    )
}

export default Login;