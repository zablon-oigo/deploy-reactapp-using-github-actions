import React, { useState } from 'react'
import {FaBars} from "react-icons/fa"
import {BsArrowRight} from "react-icons/bs"
import NavMobile from './NavMobile'
import Nav from './Nav'
import Logo from '../assets/img/logo.png'
function Header() {
    const[navMobile,setNavMobile]=useState(false)
  return (
    <header className='relative z-20 px-4 mb-12 md:mb-0 md:px-0'
    data-aos="fade-down" data-aos-delay="1200" data-aos-duration="1000">
        <div className="container mx-auto">
            <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-x-[120px]">
                <a href=""><img src={Logo} alt="" className="" /></a>
                <div className="hidden md:flex">
                      <Nav/>
                </div>
                </div>
                <div className={` ${navMobile ? 'max-h-52':'max-h-0'} absolute left-0 right-0 w-full overflow-hidden font-bold transition-all rounded md:hidden top-24 bg-accent-tertiary`}>
                    <NavMobile/>
                </div>
                <button className='btn btn-quaternary flex items-center gap-x-[20px] group'>
                    Request Demo <BsArrowRight className='text-2xl transition text-accent-primary group-hover:text-white'/>
                </button>
                <div onClick={()=>setNavMobile(!navMobile)} className="text-2xl cursor-pointer md:hidden text-primary">
                     <FaBars/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header