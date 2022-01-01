import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./SignUp.css"
import { SIGNUP_USER } from './../../gqloperations/mutations';

function SignUp() {
    const [signupUser, { data, loading, error }] = useMutation(SIGNUP_USER);

    const [formData, setFormData] = useState({})
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    if (loading) return <div className="lds-hourglass"></div>
    if (error) console.log(error.messgae)
    const handleSubmit = (e) => {
        e.preventDefault();
        signupUser({
            variables: {
                userNew: formData
            }
        });
    }
    return (
        <>
        {error && <div className='red card-panel text-center'>{error.message}</div>}
            {data && <div className='green card-panel text-center'>{data.signupUser.firstName}, is successfully Signed up,now You can login..</div>}
        <div className="container">
            

            <div className="form-box">
                <div className="header-form">
                    <h4 className="text-primary text-center">
                        {/* <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i> */}
                        </h4>
                    <div className="image">
                    </div>
                </div>
                <div className="body-form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend d-flex">
                                {/* <span className="input-group-text"> */}
                                    
                                    {/* <i className="fa fa-user"></i> */}
                                   
                            </div>
                            <input type="text"
                                className="form-control"
                                name="firstName"
                                placeholder="Firstname"
                                onChange={handleChange}

                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend d-flex">
                                {/* <span className="input-group-text"></span> */}
                                {/* <i className="fa fa-user"></i> */}
                            </div>
                            <input type="text"
                                className="form-control"
                                name="lastName"
                                placeholder="Lastname"
                                onChange={handleChange}

                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend d-flex">
                                {/* <span className="input-group-text"></span> */}
                                {/* <i className="fa fa-envelope"></i> */}
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
                                {/* <span className="input-group-text"></span> */}
                                {/* <i className="fa fa-lock"></i> */}
                            </div>
                            <input type="password"
                                className="form-control"
                                name='password'
                                onChange={handleChange}
                                placeholder="Password" />
                        </div>

                        <button type="submit" className="btn btn-secondary btn-block w-100">Register</button>
                        <div className="message">
                            <div><input type="checkbox" /> Remember ME</div>
                            <div><Link to="/login">Signin</Link></div>
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

export default SignUp
