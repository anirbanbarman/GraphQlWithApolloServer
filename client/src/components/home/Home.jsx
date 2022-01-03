import { useQuery } from '@apollo/client'
import React from 'react'
import NavBar from '../NavBar'
import "./Home.css"
import { GET_ALL_QUOTES } from './../../gqloperations/queries';
import { Link } from 'react-router-dom';

export default function Home() {
    const { loading, error, data } = useQuery(GET_ALL_QUOTES,{fetchPolicy:"cache-and-network"});
    if (loading) return <div className="lds-hourglass"></div>
    if (error) console.log(error.messgae)
   
    return (
        <div>
            {/* <NavBar /> */}
          {  data.quotes.length===0?<h2 className='text-black text-center'>No Data Found..</h2>:null}

            <section className="" style={{ backgroundColor: "#eee" }}>
                <div className="_container py-5 ">
                    {data.quotes.map((quote,i) => {
                        return (
                            <div className="w-75" key={i}>
                                <figure className="bg-white p-3 rounded text-black" style={{ borderLeft: '.25rem solid #a34e78' }}>
                                    <blockquote className="blockquote pb-2">
                                        <p>
                                            {quote.name}
                                        </p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer mb-0 font-italic">
                                    <Link to={`/profile/${quote.by._id}`}>  {quote.by.firstName}</Link>
                                    </figcaption>
                                </figure>
                            </div>
                        )
                    })}



                </div>
            </section>

        </div>
    )
}
