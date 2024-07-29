import React from 'react'
import {ctaData} from '../Data'
export default function CtaSection() {
    const{title,subtitle,btnText1,btnText2}=ctaData;
  return (
    <>
    <section className="">
    <div className="container mx-auto">
        <div className="">
            <div className="">
                <h2 className="">
                    {title}
                </h2>
                <p className="">
                    {subtitle}
                </p>
            </div>
        </div>
    </div>
    </section>
    
    </>
  )
}
