import React from 'react'
import { copyrightData } from '../Data'
export default function Copyright() {
    const{text,icon}=copyrightData;
  return (
    <div className='pb-12 mt-24' data-aos='fade-up'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-between text-center md:text-left lg:flex-row gap-y-8">
                <div className="text-sm font-light italic max-w-[360px] ">
                    {text}
                </div>
                <div className="-order-1 md:order-1">
                    <div className="w-[60px] h-[60px] bg-accent-primary/20 flex items-center justify-center rounded-full cursor-pointer group">
                    <div className="text-3xl transition-all text-accent-primary group-hover:scale-110">
                    {icon}
                    </div>
                    </div>
                </div>

            </div>
        </div>


    </div>
  )
}
