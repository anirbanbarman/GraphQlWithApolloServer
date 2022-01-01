import { useQuery } from '@apollo/client';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GET_MY_PROFILE } from '../../gqloperations/queries';

import "./Profile.css"

export default function Profile() {
    const navigate=useNavigate();

    const { loading, error, data } = useQuery(GET_MY_PROFILE);
    if(!localStorage.getItem("token")){
        navigate("/login")
        return <h1>unauthorized</h1>
}
    if (loading) return <div className="lds-hourglass"></div>
    if (error) console.log(error)

    return (
        <>
            {error && <div className='red card-panel text-center'>{error.message}</div>}

            {/* <NavBar /> */}

            <div className='row'>
                <div className='col-sm-4'>

                    <div className="card">
                        <div className="text">
                            <img src={`https://robohash.org/${data.myprofile.firstName}?set=set4`} alt="" />
                            <h4>{`${data.myprofile.firstName} ${data.myprofile.lastName}`}</h4>
                            <p>Email :{data.myprofile.email}</p>

                        </div>
                        {/* <div className="links">
                <a target="_blank" href="/"><i className="fab fa-codepen"></i></a>
                <a target="_blank" href="/"><i className="fab fa-github"></i></a>
                <a target="_blank" href="/"><i className="fab fa-youtube"></i></a>
            </div> */}
                    </div>


                </div>
                <div className='col-sm-8'>

                    <section >
                        <div className=" p-4 ">
                            <div className="row justify-content-center ">

                                {
                                    data.myprofile.quotes.map((quote, index) => {
                                        return (
                                            <div className="card text-white m-2 col-sm-5" style={{ backgroundColor: "#1f959b", borderRadius: "15px" }} key={index}>
                                                <div className="card-body p-5">

                                                    <i className="fas fa-quote-left fa-2x mb-4"></i>

                                                    <p className="lead">{quote.name}</p>
                                                    <i className="fas fa-quote-right fa-2x mb-4 float-right"></i>


                                                    <hr />

                                                    <div className="d-flex justify-content-between">
                                                        {/* <p className="mb-0">Thomas Edison</p> */}
                                                        {/* <h6 className="mb-0"><span className="badge rounded-pill" style={{ backgroundColor: "rgba(0,0,0, 0.2)" }}>876</span> <i className="fas fa-heart ms-2"></i></h6> */}
                                                    </div>

                                                </div>
                                            </div>)

                                    })

                                }



                            </div>
                        </div>

                    </section>





                </div>


            </div>
        </>
    )


}
