import React, { useEffect, useState } from 'react';
import Box from './Box';
import './App.css'
import Container from './Container';


const Card = () => {
    const url = 'https://api.chucknorris.io/jokes/categories'
    const [data, setData] = useState([])

    const fetchInfo = () =>{
        return fetch(url)
            .then((res)=>res.json())
            .then((d)=>setData(d))
    }

    useEffect(()=>{
        fetchInfo()
    },[])

    // const handleClick = (e) => {
    // //    { <Container/>}
    // console.log("hry")
    //    {console.log(e.target.val)}
    // }
  return (
    <>
       <div className='card_container'>
        {data.map((val, ind)=>{
            return(
                // document.addEventListener('click', handleClick),
                <Box key={ind} val ={val.charAt(0).toUpperCase()+ val.slice(1)}/>
                // console.log(ind)
            )
        })}
       </div>
    </>
  )
}

export default Card
