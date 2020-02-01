import React from 'react'
import {useState} from 'react'
const useCounter = (initValue) => {
    const [count, setCount] = useState(initValue)
    return [
        count, //Gia tri hien tai cua state
        () => {
            setCount(count + 1); //Ham tang
        } ,
        () => {
            setCount(count - 1); //Han giam
        }
    ]
        
            
    
}
export default useCounter
