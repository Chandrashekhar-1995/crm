import { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import {userSignin} from "../api/auth"

function Login() {
    const [showSignup, setShowSignup] = useState(false);
    const [userType, setUserType] = useState("CUSTOMER");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

 
    const toggleSignup=()=>{
        setShowSignup(!showSignup)
    }

    const handleSelect=(e)=>{
        setUserType(e)
    }

    const updateSignupData =(e) => {
        if(e.target.id ==="userId") setUserId(e.target.value);
        else if(e.target.id ==="password") setPassword(e.target.value)
    }

    const signupFn =()=>{
        console.log("Signup Button triggerd")
    }

    const loginFn = (e) => {
        e.preventDefault();
        const data = {
          userId: userId,
          password: password,
        };
        userSignin(data).then((response) => {
           localStorage.setItem("name", response.data.name);
           localStorage.setItem("userId", response.data.userId);
           localStorage.setItem("email", response.data.emaile);
           localStorage.setItem("userTypes", response.data.userTypes);
           localStorage.setItem("userStatus", response.data.userStatus);
           localStorage.setItem("token", response.data.token);
           if (response.data.userTypes === "CUSTOMER")
                window.location.href ="/customer";
           else if (response.data.userTypes === "ENGINEER")
                window.location.href ="/engineer";
           else if (response.data.userTypes === "ADMIN")
                window.location.href ="/admin";
                else window.location.href="/"
        }).catch((error) => {
            console.log(error)
        })
        }
        
    return(
        <div className="bg-info d-flex justify-content-center align-items-center vh-100">
            <div className="card p-5 rounded-4 shadow-ls" style={{width : 20 + 'rem'}}>
                <h4 className="text-center text-info">{showSignup ? "Sign Up" : "Login"}</h4>
                <form onSubmit={ showSignup ? loginFn : signupFn}>
                    <div className="input-group">
                        <input type="text" className="form-control m-1" placeholder="User id" id="userId" value={userId} onChange={updateSignupData}/>
                    </div>
                    { 
                        showSignup &&
                    <> 
                    <div className="input-group">
                        <input type="text" className="form-control m-1" placeholder="User Name" />
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
                    </>}
                    <div className="input-group">
                        <input type="password" className="form-control m-1" placeholder="Password" id="password" value={password} onChange={updateSignupData}/>
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