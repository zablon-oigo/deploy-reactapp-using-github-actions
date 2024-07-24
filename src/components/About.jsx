import React from 'react'
import {aboutData} from '../Data'
export default function About() {
    const{image,title,subtitle}=aboutData
    return (
    <>
    <section className="my-[30px] md:mt-[100px]" data-aos="fade-up" data-aos-offset='350'>
        <div className="container mx-auto">
            <div className="bg-accent-secondary/[15%] rounded-[50px] px-12 pb-12 flex flex-col text-center md:flex-row md:items-center md:text-left md:gap-x-[60px] md:pb-0">
                <div className="flex-1" data-aos='zoom-in-left'>
                <img src={image} alt="" className="" />
                </div>
                <div className="flex-1 md:pr-12 ">
                    <h2 className="mb-10 h2" data-aos='fade-up' data-aos-delay='300'>
                        {title}
                    </h2>
                    <p className="max-w[474px] mx-auto md:mx-0" data-aos='fade-up' data-aos-delay='400'>
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}
