import React from 'react'
import { Link, useNavigate } from "react-router-dom"


export default function NavBar() {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar navbar-expand  navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Quote App</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <div className="align-items-baseline navbar-nav d-flex ">
                            
                               
                               
                               
                                {token ?
                                
                                (<><Link className="nav-link" to="/profile">Profile</Link>
                                <Link className="nav-link" to="/create">Create Quote</Link>
                                <p style={{color:"red",margin:"10px"}}
                                    onClick={() => {
                                        localStorage.removeItem("token")
                                        navigate("/login")

                                    }}> Log out</p></> ): <> <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                                    <Link className="nav-link" to="/signup">Signup</Link></>}
                                
                            
                           
                        </div>
                      
                        
                    </div>
                </div>
            </nav>

        </div>
    )
}
