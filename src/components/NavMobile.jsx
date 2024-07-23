import React from 'react'
import { navigationData } from '../Data'
function NavMobile() {
  return (
    <ul className="flex flex-col px-6 py-8 gap-y-4">
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
  )
}

export default NavMobile