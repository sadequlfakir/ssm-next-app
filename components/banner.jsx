import React from 'react';

const Slide = ({imgUrl}) => {
    return (
        <div className="relative bg-cover bg-center  w-full min-h-full">
            <img className="w-full h-[350px] lg:h-[523px] object-cover object-[65%] xs:object-center" src={imgUrl} alt="" />
            <div className="absolute bottom-0 left-0 w-full h-full flex justify-center sm:justify-start items-center xl:items-end 
                bg-gradient-to-b from-white/70 to-yellow-300/40 xs:bg-gradient-to-b xs:from-white/90 xs:to-transparent">
                <div className="text-center sm:text-left  sm:pl-[76px] lg:pl-[103px] xl:pl-[153px] xl:pb-[76px]">
                    <div className="">
                        <h3 className="font-afternoon text-5xl lg:text-[64px] pb-4 text-primary px-4 xs:px-0">Start Saying More</h3>
                        <p className="text-base md:text-xl lg:text-2xl pb-6 inline-block">Bridging the gap between <br className="xs:hidden"/> you and a therapist.</p>
                    </div>
                    <div className="">
                        <div className="">
                            <button className="font-semibold text-xl lg:text-2xl lg:px-10 lg:py-3 py-2 px-6 leading-9 text-primary-100 bg-secondary-200 rounded ">
                                START SAYING MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Slide;