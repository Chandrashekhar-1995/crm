import { useNavigate } from "react-router-dom";
import unauthorized from "../static/unauthorized.svg"

function Unauthorized(){
    const navigate = useNavigate();

    const goBack=()=>{
        navigate(-1)
    }
    return(
        <div className='bg-light vh-100 d-flex justify-content-center align-items-center text-center'>
            <div>
                <h1>Un Anauthorized Access!</h1>
                <img src={unauthorized} alt="unauthorized" />
                <p className='lead fw-bolder m-1'>you do not have access to the Requested Page</p>
                <button className='btn btn-danger text-white m-1 p-2' onClick={goBack}>Go Back </button>
            </div>
        </div>
        
    )
}

export default Unauthorized;