// Write your Character component here
import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../Constants'
import axios from 'axios'

export default function Details(props) {
const [details, setDetails] = useState(null)

useEffect(() => {
axios.get(`${BASE_URL}${API_KEY}232`)
    .then(res => { setDetails(res.data) })
    .catch(err => { debugger }) // eslint-disable-line
}, [])
// useEffect(() => {
//     axios.get(`${BASE_URL}${API_KEY}230`)
//         .then(res => { setDetails(res.data) })
//         .catch(err => { debugger }) // eslint-disable-line
//     }, [])
    
return (
<div className='container'>
    <h2>Character:</h2>
    {
    details &&
    <>
                <img src={details.image} alt='Name'/>
                <h2>{details.name} is {details.gender} they are a {details.species} they are currently {details.status} </h2>
        
    </>
    }
    {/* <button onClick={close}>Close</button> */}
</div>
)
}
