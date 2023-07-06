import React from 'react'
import './App.css'
import Container from './Container';


const box = (props) => {

    const handleClick = () => {
           <Container/>
           
           {console.log(props.val)}
        }
    return (
        <>
            <div className='content' onClick={handleClick}>
                <h2>{props.val}</h2>
                <p>Unlimited Jokes On {props.val}</p>
            </div>
        </>
    )
}

export default box;
