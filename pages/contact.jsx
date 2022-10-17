import React from 'react';

const Contact = () => {
    return (
        <section>
            <div class="px-[10%] lg:px-[6%] xl:px-[5%] py-16 lg:flex flex-row-reverse w-full ">
                <div class="xl:w-1/2 hidden md:block">
                    <div class="mb-5 lg:mb-0 lg:ml-10 flex justify-center xl:justify-end">
                        <img src="/img/contact-photo.png" alt=""/>
                    </div>
                </div>
                <div class="xl:w-1/2">
                    <div class="mb-s32 text-center md:text-left">
                        <h3 class="text-3.5xl md:text-5xl font-afternoon mb-s32">Connect with us!</h3>
                        <p class="text-sm md:text-base">
                            Vestibulum id ligula porta felis euismod semper. Donec id <br class="hidden xl:block" />
                             elit non mi porta gravida at eget metus. 
                        </p>
                    </div>
                    <form class="lg:max-w-[400px] md:pr-16 lg:pr-0" action="">
                        <div class=" sm:grid grid-cols-2 gap-5">
                            <div class="mb-s32">
                                <label class="input_label" for="">First Name</label> <br/>
                                <input placeholder="First Name" class="input" type="text" name="" id=""/>
                            </div>
                            <div class="mb-s32">
                                <label class="input_label" for="">Last Name</label> <br/>
                                <input placeholder="Last Name" class="input" type="text" name="" id=""/>
                            </div>
                            <div class="mb-s32">
                                <label class="input_label" for="">Email</label> <br/>
                                <input placeholder="Email" class="input" type="text" name="" id=""/>
                            </div>
                            <div class="mb-s32">
                                <label class="input_label" for="">Phone Number</label> <br/>
                                <input placeholder="000-000-0000" class="input" type="text" name="" id=""/>
                            </div>
                        </div>
                        <div class="mb-8">
                            <label class="input_label" for="">Message</label> <br/>
                            <div class="">
                                <textarea 
                                    placeholder="We’d love to hear from you!"
                                    class="w-full h-full px-4 py-2 text-[#C4C4C4] focus:outline-none border border-[#C4C4C4] rounded" 
                                    name="message" 
                                    id="" 
                                    cols="30" 
                                    rows="4">We’d love to hear from you
                                </textarea>
                            </div>
                        </div>
                        <div class="">
                            <button 
                                class=" mt-3 xs:mt-0 font-semibold text-xl lg:text-2xl py-2 px-16 leading-9 text-primary-100 bg-secondary-200 rounded ">
                                SUBMIT
                            </button>
                        </div>
                        <div class="hidden lg:block">
                            <p class="pt-4 text-[#C93305]">There was an error with your submission.</p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Contact;