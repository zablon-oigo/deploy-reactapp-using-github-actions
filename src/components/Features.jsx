import React from 'react'
import { featuresData } from '../Data'
import {BsArrowRight} from 'react-icons/bs'
export default function Features() {
    const{title,subtitle,list}=featuresData
    return (
    <>
    <section className="my-[70px] md:my-[150px]">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="mb-6 h2 md:mb-12">
            {title}
          </h2>
          <p className="lead max-w[584px] mx-auto mb-16 md:mb-24">
            {subtitle}
          </p>
        </div>
        <div className="">
            {list.map((feature,index)=>{
              const{image,bgImage,title,description,linkText,delay}=feature;
              return(
                <div className="">
                  <div className=""></div>
                </div>
              )
            })}
        </div>
      </div>
       
    </section>
    
    </>
  )
}
