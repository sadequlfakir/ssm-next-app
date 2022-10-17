import React from 'react';
import {FaUser,FaAngleDown,FaBars} from 'react-icons/fa'

const Header = () => {
    return (
    <header>
        <div className="p-8 justify-between border-b-8 border-b-primary hidden lg:flex">
          <div className="flex items-center">
            <div className="mr-12">
                <img className="w-32" src="/img/logo.png" alt="" />
            </div>
            <nav>
              <ul className="flex gap-x-14 ">
                <li><a className="text-black text-[18px] xl:text-xl" href="/">Home</a></li>
                <li><a className="text-black text-[18px] xl:text-xl" href="/find-therapist">Find A Therapist</a></li>
                <li><a className="text-black text-[18px] xl:text-xl" href="/join-therapist">Join As A Therapist</a></li>
                <li><a className="text-black text-[18px] xl:text-xl" href="/about">About</a></li>
                <li><a className="text-black text-[18px] xl:text-xl" href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center text-3xl hover:text-secondary cursor-pointer">
            <FaUser className="pr-1 xl:text-[28px]" />
            <FaAngleDown />
          </div>
        </div>
        <div className=" lg:hidden">
          <div className="">
            <div className=" relative flex justify-between items-center py-5 px-6 xs:px-8">
              <div className="">
                <img className="max-w-[92px] hidden md:block lg:hidden " src="/img/logo.png" alt="" />
                <img className="max-w-[159px] block md:hidden " src="/img/mobile-logo.png" alt="" />
              </div>
              <div className="text-4xl">
                <FaBars />
              </div>
            </div>
            <div className="absolute top-0 w-full h-full hidden ">
              <div className="flex">
                <div className="w-1/2 h-screen bg-white">
                  <div className="py-5 px-6 md:flex justify-between items-center">
                    <div className="">
                      <img className="max-w-[100px] hidden md:block lg:hidden " src="/img/logo.png" alt="" />
                      <img className="max-w-full block md:hidden " src="/img/mobile-logo.png" alt="" />
                    </div>
                    <div className="hidden md:block">
                      <i className="fa-sharp fa-solid fa-xmark text-3xl"></i>
                    </div>
                  </div>
                  <div className="pt-2">
                    <ul className="text-center px-2 xs:px-0">
                      <li><a className="text-black text-[18px] xl:text-xl mb-6 inline-block" href="/index">Home</a></li>
                      <li><a className="text-black text-[18px] xl:text-xl mb-6 inline-block" href="/find-therapist">Find A Therapist</a></li>
                      <li><a className="text-black text-[18px] xl:text-xl mb-6 inline-block" href="/join-therapist">Join As A Therapist</a></li>
                      <li><a className="text-black text-[18px] xl:text-xl mb-6 inline-block" href="/about">About</a></li>
                      <li><a className="text-black text-[18px] xl:text-xl mb-6 inline-block" href="/contact">Contact</a></li>
                    </ul>
                    <div className="flex justify-center items-center text-3xl cursor-pointer hover:text-secondary">
                      <i className="fa-solid fa-user pr-1 text-2xl "></i>
                      <i className="fa-solid fa-angle-down text-2xl"></i>
                    </div>
                    <div className="flex justify-center pt-6">
                      <div className="block text-center">
                        <p className="inline-block pb-3">Select Profile Type</p>
                        <button className="mb-4 font-semibold text-xl xs:text-2xl py-2 px-6 leading-9 text-primary-100 bg-secondary-200 rounded block">THERAPIST</button>
                        <button className=" mx-auto font-semibold text-xl xs:text-2xl py-2 px-6 leading-9 text-primary-100 bg-secondary-200 rounded block">PATIENT</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 h-screen bg-low-bg md:bg-primary-100"></div>
              </div>
            </div>
          </div>
        </div>
    </header>
    )
};

export default Header;