import React from 'react';

const About = () => {
    return (
        <div className="">
            <section>
                <div class="relative">
                    <img class="w-full min-h-[500px] md:max-h-[400px] xl:max-h-[587px] object-cover object-[20%_top] md:object-[0] " src="/img/about-p/banner.jpg" alt="" />
                    <div class="absolute w-screen flex justify-center md:justify-end items-center h-full top-0 bg-gradient-to-b from-white/70 to-secondary/70 md:bg-gradient-to-r md:from-transparent  md:to-secondary/70">
                    <h3 class="font-afternoon text-5xl md:text-6xl lg:text-7xl text-primary text-center md:text-right px-8 md:pr-24 lg:pr-[156px]">We want you to <br/> Start Saying More</h3>
                    </div>
                </div>
            </section>

            <div class="my-16">
                <div class="px-[8%] lg:px-[15%]">
                    <section>
                        <div class="pb-6 text-center md:text-left">
                            <p class="">
                            With a lack of Minority providers available, Minority groups are more likely to suffer negative 
                            Start Saying More is dedicated to dismantling these beliefs by providing resources and support for the mental 
                            health of Black and minority individuals. Everyone deserves the right to quality mental healthcare, and we’re 
                            here to help individuals start saying more.
                            </p>
                            <p>
                            Our goal is to improve the accessibility and efficacy of mental health care by eliminating the search process 
                            and reducing the likelihood of switching therapists or giving up on therapy. We want to help you get rid of 
                            the grunt work that comes with searching for a therapist! At Start Saying More, we will match you with a therapist 
                            who has the personality and experience you are looking for, so that you can begin your counseling journey more easily. 
                            We don't want a difficult process or bad experience to deter you from taking care of your mental health needs, 
                            so we are here to help make it easier for you to start and more likely for you to stay.
                            </p>
                        </div>
                    </section>
                    <section>
                        <div class="mt-16">
                            <div class="">
                            <div class="mb-8 text-center lg:text-left lg:hidden">
                                <h3 class="font-bold text-2xl md:text-3.5xl mb-2">Olamide Afolabi</h3>
                                <h5 class="text-xl md:text-2xl font-normal">CEO & Founder</h5>
                            </div>
                            <div class="lg:flex flex-row-reverse">
                                <div class="flex justify-center">
                                <div class=" max-w-[340px] lg:min-w-[340px] xl:min-w-[428px]">
                                    <img class="w-full mb-s32 lg:mb-0 lg:mt-12" src="/img/about-p/photo-1.jpg" alt=""/>
                                </div>
                                </div>
                                <div class="text-center md:text-left lg:mr-[41px]">
                                <div class="mb-4 text-center lg:text-left hidden lg:block">
                                    <h3 class="font-bold text-2xl md:text-3.5xl mb-2">Olamide Afolabi</h3>
                                    <h5 class="text-xl md:text-2xl font-normal">CEO & Founder</h5>
                                </div>
                                <p class="pb-3">
                                    Start Saying More was founded by Olamide Afolabi, a Nigerian American who has made it 
                                    her mission in life to get as many people as she can into therapy. She holds the strong belief that 
                                    the ability to unlearn and relearn how to properly process experiences is one of the first things 
                                    that poise us for success. In the past, Olamide had worked with some non-Black mental health providers 
                                    who simply did not create a comfortable and trusting atmosphere. Due to this, she would half-heartedly 
                                    attend sessions until she would stop going completely. Each time, it would take years before she put in 
                                    the effort to find a new therapist. It wasn’t until Olamide found a Black woman therapist with similar 
                                    personality traits, values, and experiences that she felt fully supported enough to explore herself and do 
                                    the self work necessary to be a better human, all around.
                                </p>
                                <p>
                                    The story of having a difficult time connecting with a mental health provider is not new or uncommon. 
                                    Understanding this, Olamide is devoted to providing methods to not only get more Black and minority 
                                    people into therapy, but to retain them as well.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="mt-16">
                            <div class="">
                            <div class="mb-8 text-center lg:text-left lg:hidden">
                                <h3 class="font-bold text-2xl md:text-3.5xl mb-2">Giselle Duran</h3>
                                <h5 class="text-xl md:text-2xl font-normal">Creative Director & Co-founder</h5>
                            </div>
                            <div class="lg:flex">
                                <div class="flex justify-center">
                                <div class=" max-w-[340px] lg:min-w-[340px] xl:min-w-[428px]">
                                    <img class="w-full mb-s32 lg:mb-0 lg:mt-16 " src="./img/about-p/photo-2.png" alt=""/>
                                </div>
                                </div>
                                <div class="text-center md:text-left lg:ml-[41px]">
                                <div class="mb-4 text-center lg:text-left hidden lg:block">
                                    <h3 class="font-bold text-2xl md:text-3.5xl mb-2">Giselle Duran</h3>
                                    <h5 class="text-xl md:text-2xl font-normal">Creative Director & Co-founder</h5>
                                </div>
                                <p class="pb-3">
                                    Giselle joined Start Saying More as the brand and website designer for the business. 
                                    Her personal relationship with therapy began in 2019 with couples therapy and then 
                                    again in 2020 with individual therapy. As a first-generation Dominican American, 
                                    therapy was not a regular discussion in the household; emotions and frustrations 
                                    had to be held in and figured out internally. Thanks to friends like Olamide, therapy 
                                    became a less taboo subject matter and something that Giselle realized she could benefit from. 
                                    Once she began her mental health journey, she was able to begin working on herself which translated 
                                    into working on her relationships with others. With her own experience under her belt, 
                                    Giselle is wanting to help others seeking their own internal clarity find the mental health 
                                    provider that is going to make a difference in their lives. 
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <section>
            <div class="px-[10%] mb-16">
                <h5 class="mb-3 text-2xl font-normal">Connect with us on social mediha!</h5>
            </div>
            </section>
        </div>
    )
};

export default About;