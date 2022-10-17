import Head from 'next/head'
import Image from 'next/image'
import {} from 'react-icons'
import Step from '../components/Step'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Slide from '../components/banner';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SSM</title>
      </Head>
      <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            imgUrl={"/img/Hero-Banner/banner-1.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imgUrl={"/img/Hero-Banner/banner-2.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imgUrl={"/img/Hero-Banner/banner-3.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imgUrl={"/img/Hero-Banner/banner-4.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imgUrl={"/img/Hero-Banner/banner-5.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imgUrl={"/img/Hero-Banner/banner-6.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imgUrl={"/img/Hero-Banner/banner-7.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imgUrl={"/img/Hero-Banner/banner-8.jpg"}
          />
        </SwiperSlide>
      </Swiper>
      </section>
      <div className="">
        <div className="px-[32px]">
          <section className="flex justify-center py-16">
            <div className=" md:flex md:flex-row-reverse md:items-center">
              <div className="max-w-[488px]">
                <p className="lg:text-base pb-8 text-center md:text-left text-sm">
                  Finding the right therapist can be stressful and time-
                  intensive. Start Saying More is an innovative platform that 
                  aims to connect minority individuals with a mental health 
                  provider that they are most likely to feel secure sharing and 
                  healing with. Using our detailed survey, we’ll match your 
                  personality, area(s) of concern, experiences, and 
                  preferences with professionals in our database that are just 
                  right for you. We’re helping to reduce the stress associated 
                  with looking for a new provider. We want to make it easier for 
                  you.
                </p>
              </div>
              <div className="md:pr-12">
                <img className="md:max-w-[317px] m-auto" src="/img/banner-image/banner-2.png" alt=""/>
              </div>
            </div>
          </section>
          <section className="">
            <div className=" pb-16">
              <h3 className="text-center text-[32px] font-bold pb-9">How it Works</h3>
              <div className="flex justify-center pb-9">
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
            <div className=" hidden md:block">
              <h3 className="text-[32px] font-semibold text-center pb-[32px]">Who We Are</h3>
              <div className="text-base text-center pb-14 md:max-w-[702px] xl:max-w-[999px] mx-auto">
                <p>Outside of matching you with your ideal therapist, we also provide tips for self-care 
                  and mental wellness on our social media pages. Visit us on Instagram for regular posts 
                  that can assist you in your daily life and supplement your therapy experience.
                </p>
              </div>
              <div className=" flex justify-center">
                <div className=" pb-16 flex gap-x-5">
                  <div className="w-[165px] xl:w-[220px]">
                    <img className="" src="/img/banner-image/banner-2/CleanShot-1.png" alt="" />
                  </div>
                  <div className="w-[165px] xl:w-[220px]">
                    <img className="" src="/img/banner-image/banner-2/CleanShot-2.png" alt="" />
                  </div>
                  <div className="w-[165px] xl:w-[220px]">
                    <img className="" src="/img/banner-image/banner-2/CleanShot-3.png" alt="" />
                  </div>
                  <div className="w-[165px] xl:w-[220px]">
                    <img className="" src="/img/banner-image/banner-2/CleanShot-4.png" alt="" />
                  </div>
                  <div className="w-[165px] xl:w-[220px] hidden xl:block">
                    <img className="" src="/img/banner-image/banner-2/CleanShot-5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
