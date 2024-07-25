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
        <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2">
            {list.map((feature,index)=>{
              const{image,bgImage,title,description,linkText,delay}=feature;
              return(
                <div className="w-full max-w-[530px] relative flex flex-col items-center justify-center md:flex-row md:justify-start mx-auto" key={index}>
                  <div className="absolute top-0 right-0 hidden md:flex -z-10">
                    <img src={bgImage} alt="" className="" />
                  </div>
                  <div className="max-w-[120px] md:mr-7 md:max-w-[232px]">
                    <img src={image} alt="" className="" />
                  </div>
                  <div className="max-w-[220px]">
                    <h3 className="mb-4 h3">
                      {title}
                    </h3>
                    <p className="mb-4 italic font-light">
                      {description}
                    </p>
                    <div className="flex items-center group gap-x-2">
                      <a href="" className="font-bold text-primary">
                        {linkText}
                      </a>
                      <BsArrowRight className='text-xl text-accent-primary group-hover:ml-[5px] transition-all'/>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
       
    </section>
    
    </>
  )
}
