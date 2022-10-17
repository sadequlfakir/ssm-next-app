import React from 'react';

const Step = ({title, description, imgUrl}) => {
    return (
        <div className="border-2 border-primary rounded mb-6 md:mb-0 max-w-sm mx-auto md:mx-0 xl:max-w-full" >
            <div className="text-center px-[26px] py-[24px]" >
                <h4 className="text-2xl pb-6">{title}</h4>
                <div className=" flex justify-center w-24 lg:w-[136PX] m-auto" >
                    <img className="pb-6 w-full " src={imgUrl} alt="" />
                </div>
                <p className="max-w-[420px]">
                    {description}
                </p>
            </div>
        </div>
    )
};

export default Step;