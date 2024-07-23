import React from 'react'
import { heroData } from '../Data';
import image from "../assets/img/hero-img.png"
function Hero() {
  const {title,subtitle,btnText,image}=heroData;
  return (
    <>
    <section className="lg:h-[900px] py-12">
      <div className="container relative h-full mx-auto">
        <div className="flex flex-col items-center h-full md:flex-row md:py-24">
          <div className="text-center md:text-left md:absolute">
            <h1 className="h1 md:max-w-[700px] mb-6 md:mb-12">
              {title}
            </h1>
            <p className="lead  md:max-w-[380px] mb-6 lg:mb-12">
              {subtitle}
            </p>
            <button className="mb-8 btn btn-primary md:mb-0">
              {btnText}
            </button>
          </div>
          <div className="md:absolute md:-right-12 md:bottom-16">
            <img src={image} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero