import React from 'react'
import './App.css'

const Container = (props) => {
  return (
    <>
      <div className="pop_container">
        <h1>{props.val}Animal</h1>
        <div className='pop_content'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum sequi vero at veniam, dolorem odio vel ex amet asperiores.</p>
            <button>Next</button>
        </div>
      </div>
    </>
  )
}

export default Container;
