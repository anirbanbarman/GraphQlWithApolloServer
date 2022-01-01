import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_USER_BY_ID } from '../gqloperations/queries';

export default function OtherUserProfile() {

    const { userId } = useParams();
    const { loading, error, data } = useQuery(GET_USER_BY_ID, {
        variables: { userid:userId }

    });
    
    if (loading) return <div className="lds-hourglass"></div>
    if (error) console.log(error)


    return (
        <div>
            <div className='row'>
                <div className='col-sm-4'>

                    <div className="card">
                        <div className="text">
                            <img src={`https://robohash.org/${data.user.firstName}`} alt="" />
                            <h4>{`${data.user.firstName} ${data.user.lastName}`}</h4>
                            <p>Email :{data.user.email}</p>

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
                                    data.user.quotes.map((quote, index) => {
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
        </div>
    )
}
