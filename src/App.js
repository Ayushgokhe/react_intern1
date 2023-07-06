import React from 'react';
import './App.css';
import Card from './Card';
import Container from './Container';


const App = () => {
  return (
    <>
      <h1 className='header'>Chuck Norries</h1>
      <div className='container'>
       <Card/>
       {/* <Container/> */}
      </div>
    </>
  )
}

export default App
