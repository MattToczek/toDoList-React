import React from 'react'
import Btn from './Btn'

export default function Post(props) {
    
    return (
        <div>
            {   props.list.map((item, i)=> {
                return <li key={i}>{item} {props.button(i)}</li>
             })
            }
                
                
            
        </div>
    )
}


