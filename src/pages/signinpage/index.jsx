import React, {useState} from 'react';
import './signinpage.style.scss'
import SigninForm from "../../Components/compounds/forms/signinform";
import Dashboard from "../dashboard";


const SignIn = () => {
    const adminUser = {
        email: '',
        password:''
    }

    const [user, setUser] = useState({userName: '', email: ""})
    const [error, setError] = useState('')

    const Login = details => {
        if (details.email ==adminUser.email && details.password ==adminUser.password)
        console.log("logged in")
        setUser({email:details.email, password:details.password});

    }
    const Logout =() => {
        console.log("logout")
    }
    return (
        <div className="sign-in">
            <div className="sign-in__innercontainer">
                <div className="left-blue-partition"></div>
                {(user.email !="") ?( <Dashboard />):<SigninForm Login={Login} error={error}/>}
            </div>

        </div>
    )
}
export default SignIn;
