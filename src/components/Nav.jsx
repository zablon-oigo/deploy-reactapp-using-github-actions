import React from 'react'
import { navigationData } from '../Data'
function Nav() {
  return (
    <nav className="">
        <ul className="flex gap-x-8">
        {navigationData.map((item,index)=>{
            return(
                <li className="" key={index}>
                    <a href={item.href} className="">
                        {item.name}
                    </a>
                </li>
            )
        })}
        </ul>
    </nav>
  )
}

export default Nav