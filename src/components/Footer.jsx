import React from 'react'
import {footerData} from '../Data'
import Copyright from './Copyright';
export default function Footer() {
    const{logo,address,email,phone,list1,list2,socialList}=footerData;
  return (
    <>
    <footer className="" data-aos="fade-up">
        <div className="container mx-auto">
            <div className="flex flex-col text-center md:flex-row md:text-left gap-y-12 ">
                <div className="w-[45%]   mx-auto flex flex-col items-center md:items-start">
                    <a href="" className="">
                        <img src={logo} alt="" className="mb-[65px]" />
                    </a>
                    <div className="">
                        <span className="max-w-[260px] mb-5 text-primary" font-bold>
                            {address}
                        </span>
                    </div>
                    <div className="">
                        <span className="italic font-light">
                            {email}
                        </span>
                    </div>
                    <div className="">
                        <span className="italic font-light">
                            {phone}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col justify-between flex-1 gap-y-14 md:flex-row">
                    <div className="">
                        <h2 className="mb-8 font-extrabold text-primary">
                             About
                        </h2>
                        <ul className="flex flex-col gap-y-4">
                            {list2.map((item,index)=>{
                                return(
                                    <li className="" key={index}>
                                        <a className="text-primary" href={item.href}>{item.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="mb-8 font-extrabold text-primary">
                            Help
                        </h2>
                        <ul className="flex flex-col gap-y-4">
                            {list1.map((item,index)=>{
                                return(
                                    <li className="" key={index}>
                                        <a className="text-primary" href={item.href}>{item.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="mb-8 font-extrabold text-primary">
                            Social Media
                        </h2>
                        <ul className="flex justify-center gap-4">
                            {socialList.map((item,index)=>{
                                return(
                                    <li className="flex items-center justify-center w-12 h-12 transition-all rounded-full cursor-pointer bg-primary/10 hover:bg-accent-secondary" key={index}>
                                        <a className="text-xl text-white hover:text-white " href={item.href}>{item.icon}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    </div>
            </div>
            <Copyright/>
        </div>
    </footer>
    </>
  )
}
