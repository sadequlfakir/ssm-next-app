import React from 'react';
import { AiFillInstagram,AiOutlineTwitter,AiFillLinkedin,AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
        <div className="py-9" style={{backgroundImage: "url(/img/footer-background.png)"}} >
          <div className="md:flex">
            <div className=" md:w-2/5 lg:w-34 xl:w-2/5 pb-6 flex justify-center items-center">
              <div className="" >
                <div className="md:max-w-xs mx-auto w-52 flex justify-center pb-6" >
                  <img className="" src="/img/footer-logo.png" alt="" />
                </div>
                <div className="text-3xl flex justify-center gap-5 text-primary">
                  <AiFillInstagram />
                  <AiOutlineTwitter />
                  <AiFillFacebook />
                  <AiFillLinkedin/>
                </div>
                <div className="hidden text-xs pt-6 mx-auto px-3 md:block lg:hidden text-center">
                  <p>Copyright &copy; 2020 Start Saying More, LLC. All Rights Reserved. | Privacy Policy | Terms & Conditions</p>
                </div>
              </div>
            </div>
            <div className=" lg:flex lg:pr-9 xl:pr-0">
              <div className="lg:pr-12">
                <div className="pb-9 lg:pb-16 ">
                  <h6 className="font-semibold text-15px pb-4 text-center lg:text-left" >Stay in touch with us!</h6>
                  <div className="flex justify-center text-center">
                    <div className="inline-block xs:flex justify-center">
                      <div className="max-w-[235px]">
                        <input 
                        className=" w-full focus:outline-none text-base text-neutral-400 mr-4 border-solid border border-gray-300 py-3 px-4 rounded " 
                        type="email" 
                        placeholder="Email Address"
                        name="email" 
                        id="sub-email " />
                      </div>
                      <button className=" mt-3 xs:mt-0 xs:ml-3 font-semibold text-2xl py-2 px-6 leading-9 text-primary-100 bg-secondary-200 rounded ">SUBMIT</button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h6 className="font-semibold text-15px pb-4 text-center lg:text-left">Quick Links</h6>
                  <ul className="grid grid-cols-2 gap-y-6 text-center lg:text-left max-w-[400px] mx-auto">
                    <li><a className="text-black hover:text-primary text-15px " href="/">Home</a></li>
                    <li><a className="text-black hover:text-primary text-15px " href="/about">About</a></li>
                    <li><a className="text-black hover:text-primary text-15px " href="/contact">Contact</a></li>
                    <li><a className="text-black hover:text-primary text-15px " href="/faq">FAQs</a></li>
                    <li><a className="text-black hover:text-primary text-15px " href="#">Donate</a></li>
                    <li><a className="text-orange-700 font-semibold hover:text-primary text-15px " href="#">Emergency Resources</a></li>
                  </ul>
                </div>
              </div>
              <div className="pl-12 border-l border-primary hidden lg:block">
                <div className="mb-6">
                  <h6 className="font-semibold text-15px pb-4">
                    <span className="relative">Find A Therapist
                      <img className="absolute top-t-50 right-r-rem" src="/img/Speech-Submark.svg" alt="" /> 
                    </span>
                  </h6>
                  <p className="pb-3 text-15px">
                    Are you ready to start your <br/>
                    therapy journey? Match with <br/>
                    one today!
                  </p>
                  <button className="font-semibold text-lg py-2 px-6 leading-7 text-primary-100 bg-none border-4 border-secondary-200 rounded ">START SAYING MORE</button>
                </div>
                <div className="">
                  <h6 className="font-semibold text-15px pb-4">
                    <span className="relative">Join As A Therapist 
                      <img className=" absolute -top-1 right-1-rem" src="/img/Lip Submark.svg" alt="" /> 
                    </span>
                  </h6>
                  <p className="pb-3 text-15px">
                    Interested in joining our <br/>
                    directory?
                  </p>
                  <button className=" font-semibold text-lg py-2 px-6 leading-7 text-primary-100 bg-none border-4 border-secondary-200 rounded ">REGISTER TODAY</button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 px-6 lg:px-0 justify-center text-center text-xs flex">
            <p>Copyright &copy; 2020 Start Saying More, LLC. All Rights Reserved. | Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </footer>
    )
};

export default Footer;