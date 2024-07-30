import React from 'react'
import {ctaData} from '../Data'
import {BsArrowRight} from 'react-icons/bs'
export default function CtaSection() {
    const{title,subtitle,btnText1,btnText2}=ctaData;
  return (
    <>
    <section className="my-[75px] md:my-[150px] border-t-2">
    <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="py-12 text-center md:py-24 md:text-left">
                <h2 className="mb-5 h2">
                    {title}
                </h2>
                <p className="lead">
                    {subtitle}
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-y-4 gap-x-[30px] ">
                <button className="btn btn-secondary">
                    {btnText1}
                </button>
                <button className="flex items-center btn btn-quaternary gap-x-[20px] group">
                    {btnText2}
                    <BsArrowRight className="text-2xl transition text-accent-primary group-hover:text-white "/>
                </button>
            </div>
        </div>
    </div>
    </section>
    
    </>
  )
}
