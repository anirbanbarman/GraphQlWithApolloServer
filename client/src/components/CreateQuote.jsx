import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { CREATE_QUOTE } from './../gqloperations/mutations';
import { GET_ALL_QUOTES } from './../gqloperations/queries';
import NavBar from './NavBar';

export default function CreateQuote() {

    const [createQuote,{loading,error,data}]=useMutation(CREATE_QUOTE,{refetchQueries:[
"getAllQuotes","getMyProfile"
    ]});

    const [quote,setQuote]=useState("");
    const handleSubmit=(e)=>{
      createQuote({variables:{
          name:quote

      }})
        
        
    }
    if (loading) return <div className="lds-hourglass"></div>
    if (error) console.log(error.messgae)

    return (
        <div>
        {error && <div className='red card-panel text-center'>{error.message}</div>}
        {data && <div className='green card-panel text-center'>{data.quote}</div>}
 

           

             
            <div className="row  m-5">
    <form className="col sm-10">
      <div className="row">
        <div className="input-field col s12">
          <textarea onChange={(e)=>setQuote(e.target.value)} id="textarea1" className="materialize-textarea"></textarea>
          <label htmlFor="textarea1">Write Your Quote</label>
        </div>
        <button onClick={handleSubmit}  className='btn-primary'>Create Quote</button>
      </div>
    </form>
  </div>

            
        </div>
    )
}
