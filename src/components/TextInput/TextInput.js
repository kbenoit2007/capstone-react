import React from 'react'
import './TextInput.scss'


function TextInput({className, placeholder, type, onTextChange}){


  function handleInput(e){
   const newText =  e.target.value
   onTextChange(newText)

    
  }
    


    return(
        <>
          <input
            className={className}
            placeholder={placeholder}
            type={type}
            onChange={handleInput}
          />
        </>
    )
}

export default TextInput