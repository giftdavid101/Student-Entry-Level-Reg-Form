import React , {useState}from 'react';
// import {Link} from 'react-router-dom';
// import Button from "../../../atoms/Button";
import {FaUserCircle} from 'react-icons/all';


const SigninForm = ({Login,error}) => {
    const [details,setDetails] = useState({userName: '', email: '', password:''})

    const submitHandler =(e)=> {
        e.preventDefault();
    Login(details)
    }

    return (
        <div className="sign-in-form" style={{margin: "auto"}}>
            <div className="sign-in-form__cardcontainer" style={{width:"100%",display:"flex",justifyContent:"center", flexDirection:"column",
                alignItems:"center"}}>

                <div className="sign-in-form__user"  style={{margin:"auto"}}    ><FaUserCircle fontSize={'400px'} color={'white'} textAlign={'center'} /></div>
                <form onSubmit={submitHandler} style={{width: "100%",textAlign:"center"}}>
                    {(error !=="") ? (<span>{error}</span>) : ""}
                    <div>
                        <label htmlFor="email"> Email</label>
                        <input type='text' name="email" id='email' onChange={ e => setDetails({...details, email: e.target.value})} value={details.email} />
                    </div>
                    <div>
                        <label htmlFor="password"> Password</label>
                        <input type='password' name="password" id='password' onChange={ e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>

                    <button>Log in</button>
                </form>

            </div>
        </div>
    )
};

export default SigninForm;