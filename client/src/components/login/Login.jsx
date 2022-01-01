import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import { useMutation } from '@apollo/client';
import { SIGNIN_USER } from '../../gqloperations/mutations';

function Login() {

    const navigate=useNavigate();
    const [formData, setFormData] = useState({})
    const [signinUser, { data, loading, error }] = useMutation(SIGNIN_USER,{
        onCompleted(data){
            localStorage.setItem("token",data.user.token)
            navigate("/")
        }
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        signinUser({
            variables: {
                userSignin: formData
            }
        });
        
    }
    // if(data){
    //     localStorage.setItem("token",data.user.token)
    //     navigate("/")
    // }
    if (loading) return <div className="lds-hourglass"></div>
    if (error) console.log(error.messgae)
    return (
        <>
         {error && <div className='red card-panel text-center'>{error.message}</div>}
           <div className="container">
            <div className="form-box">
                <div className="header-form">
                    <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                    <div className="image">
                    </div>
                </div>
                <div className="body-form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend d-flex">
                                {/* <span className="input-group-text"><i className="fa fa-envelope"></i></span> */}
                            </div>
                            <input type="text"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}

                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend d-flex">
                                {/* <span className="input-group-text"><i className="fa fa-lock"></i></span> */}
                            </div>
                            <input type="password"
                                className="form-control"
                                name='password'
                                onChange={handleChange}
                                placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-secondary btn-block w-100">LOGIN</button>
                        <div className="message">
                            <div><input type="checkbox" /> Remember ME</div>
                            <div><Link to="/signup">Sign up</Link></div>
                        </div>
                    </form>
                    <div className="social">
                        <Link to="/"><i className="fab fa-facebook"></i></Link>
                        <Link to="/"><i className="fab fa-twitter-square"></i></Link>
                        <Link to="/"><i className="fab fa-google"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Login
