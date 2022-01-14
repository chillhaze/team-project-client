import React from 'react'
import icons from "../../images/icons.svg"

export default function Logo() {

    return (
       
   <a href="/">
            <svg width="90" height="31">
                <use href={icons + "#icon-logo"}> </use>
            </svg>
            </a>
          
    )
}
