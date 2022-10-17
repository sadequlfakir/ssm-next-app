import Step from "../components/Step";

import React from 'react';

const FindTherapist = () => {
    return (
        <div className="">
            <div className="px-[10%] md:px-[12%] lg:px-[15%]">
                <section>
                <div className="py-16">
                    <h2 className="text-center text-3.5xl md:text-[48px] font-afternoon pb-[32px] ">Find a Therapist</h2>
                    <div className=" md:flex justify-between">
                    <div className="md:flex items-center ">
                        <div className="">
                            <div className=" text-center">
                                <h4 className="text-2xl pb-6">Step 1</h4>
                                <button 
                                className=" mt-3 xs:mt-0  font-semibold text-xl py-2 px-6 leading-9 text-primary-100 bg-secondary-200 rounded ">
                                MYERS BRIGGS TEST
                                </button>
                            </div>
                            <div className=" text-center hidden md:block mt-[32px]">
                                <h4 className="text-2xl pb-6">Step 2</h4>
                                <button 
                                className=" mt-3 xs:mt-0  font-semibold text-xl py-2 px-6 leading-9 text-primary-100 bg-secondary-200 rounded ">
                                MATCH SURVEY
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-center py-[32px]">
                        <img className="max-w-[343px] max-h-[274.4px] xl:min-w-[591px] xl:min-h-[472.8px]" src="/img/find-therapist/banner-1.png" alt=""/>
                    </div>
                        <div className=" text-center md:hidden">
                        <h4 className="text-2xl pb-6">Step 2</h4>
                        <button 
                            className=" mt-3 xs:mt-0  font-semibold text-xl py-2 px-6 leading-9 text-primary-100 bg-secondary-200 rounded ">
                            MATCH SURVEY
                        </button>
                        </div>
                    </div>
                </div>
                </section>
                <section className="">
                    <div className=" pb-16">
                        <h3 className="text-center text-2xl md:text-3.5xl font-bold pb-9">How it Works</h3>
                        <div className="pb-9">
                            <div className=" md:grid grid-cols-2 gap-6">
                                <Step 
                                    title="Step 1"
                                    imgUrl={'/img/how-icon/ico-1.png'}
                                    description={' Complete the Myers-Briggs’ Personality test to receive your five factor personality type.'} 
                                />
                                <Step 
                                    title="Step 2"
                                    imgUrl={'/img/how-icon/ico-2.png'}
                                    description={`Complete the Myers-Briggs’ Complete our detailed survey to provide us with your personality factors, 
                                        experiences, preferences, and area(s) of concern.`} 
                                />
                                <Step 
                                    title="Step 3"
                                    imgUrl={'/img/how-icon/ico-3.png'}
                                    description={`Our intelligent algorithm will use the results you have provided us 
                                    with to match you with mental health professionals.`} 
                                />
                                <Step 
                                    title="Step 4"
                                    imgUrl={'/img/how-icon/ico-4.png'}
                                    description={`CYou will receive a list of professionals that you can contact so you can 
                                    begin your healing journey!`} 
                                />
                            </div>
                        </div>
                        <div className=" text-center">
                            <button 
                                className=" mt-3 xs:mt-0  font-semibold text-xl py-2 px-6 leading-9 text-primary-100 bg-secondary-200 rounded ">
                                FIND A THERAPIST
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                <div className="py-16">
                    <h3 className="text-center text-2xl md:text-3.5xl font-bold pb-s32">Therapy is more successful when you feel supported</h3>
                    <div className=" text-center text-sm md:text-base md:text-left">
                    <p  className="pb-6">
                        When it comes to the mental health treatment journey, a critical aspect of your 
                        healing is how connected you feel to your provider. Have you ever tried going to 
                        a therapist just to feel disconnected and ultimately quit going? Or maybe you were 
                        simply just looking for a therapist and became overwhelmed with the sheer number of 
                        options out there. Well, we can promise you that you're not alone. Unfortunately, 
                        finding the ideal therapist ends up being much like dating around. The issue, though, 
                        is that feeling a disconnect in therapy only continues to affect us in the long run. 
                    </p>
                    <p className="pb-6">​
                        Our goal is to enable you to not only enlist in therapy but to have a successful 
                        experience. To do that, we first need you to complete an online Myers & Briggs 
                        personality test.  Here’s the logic - research has shown that certain combinations 
                        of personalities have a higher likelihood of forming a positive connection. For example, 
                        if your results show that you are a Sensing Judger (ex: ESTJ), you may benefit from a 
                        pairing with a mental health provider who is also a Sensing Judger (ex: ISFJ) because 
                        when paired together, Sensing Judgers have a 79% success rate in getting along (1). 
                        High connection success rates can be seen with various personality pairings. 
                    </p>
                    <p className="pb-6">
                        We don’t stop at pairing you with your personality match, though! To ensure 
                        that you’re receiving optimal care, we are also connecting you based on your 
                        experiences. When independently searching for a mental health provider it’s 
                        important to review the counselor's areas of expertise, so we made sure to 
                        include that in your connection as well. In our survey, we will ask you to 
                        share your experiences and area(s) of concern. We will then use our intelligent 
                        algorithm to compare your background with the professional experiences of therapists 
                        in our database to pair you with a provider who has experience in working with 2 or 
                        more of your area(s) of concern. For this reason, we ask that you share as much as you 
                        are comfortable sharing. The more information we have about you, the closer the match 
                        we will be able to find.
                    </p>
                    <p className="pb-6">
                        We will also be sure to inquire about your preferences, so we can connect you with 
                        a mental health provider with whom you will feel comfortable sharing with. 
                    </p>
                    <p className="pb-6">
                        Combined with an environment where you feel culturally seen, we feel these factors 
                        will help to foster the optimal ambiance for healing. In this setting, you will 
                        feel enabled to share more, communicate more, and start saying more.
                    </p>
                    <p>
                        <i>
                        References: <br/>
                        1. Tieger, P., & Barron-Tieger, B. (2000). Just Your Type. Boston, MA: Little, Brown, and Co.   
                        </i>
                    </p>
                    </div>
                </div>
                </section>
            </div>
        </div>
    )
};

export default FindTherapist;