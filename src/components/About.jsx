import React from 'react'
import {aboutData} from '../Data'
export default function About() {
    const{image,title,subtitle}=aboutData
    return (
    <>
    <section className="my-[30px] md:mt-[100px]">
        <div className="container mx-auto">
            <div className="bg-accent-secondary/[15%] rounded-[50px] px-12 pb-12 flex flex-col text-center md:flex-row md:items-center md:text-left md:gap-x-[60px] md:pb-0">
                <div className="flex-1">
                <img src={image} alt="" className="" />
                </div>
                <div className="flex-1 md:pr-12 ">
                    <h2 className="mb-10 h2">
                        {title}
                    </h2>
                    <p className="max-w[474px] mx-auto md:mx-0">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}
