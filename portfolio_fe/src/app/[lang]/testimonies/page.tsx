import React from "react";
import NavigationBar from "@/components/navigationbar";
import Image from "next/image";
import img from "../../../../public/testimonies.jpg";
import "react-multi-carousel/lib/styles.css";
import {Locale} from "../../../../i18n.config";
import {getDictionary} from "../../../../lib/getDictionary";

// Responsive breakpoints for the carousel
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Home = async ({params: {lang},}: { params: { lang: Locale } }) => {

    const {testimonies} = await getDictionary(lang)
    return (
        <div>
            <NavigationBar lang={lang}/>
            {/* Header Section */}
            <header className="flex justify-center mt-16">
                <div className="flex flex-col items-center gap-5 w-9/10 md:w-4/5 lg:w-3/5">
                    <h1 className="text-center text-[80px] leading-tight italic font-bebas-neue text-stroke-black">{testimonies.testimoniesTitle}</h1>
                </div>
            </header>

            <div className="flex justify-center items-center gap-5 mx-10 my-10">
                <hr className="w-1/3"/>
                <p className="text-center font-light text-opacity-25 italic animate-pulse flex gap-2 font-inter">{testimonies.leaveAText}<span
                    className="hidden md:block">{testimonies.testimoniesSingular}</span></p>
                <hr className="w-1/3"/>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:px-8 lg:px-16">

                {/* Image container */}
                <div className="md:flex-1 flex justify-center items-center mb-4 md:mb-0">
                    <Image src={img} alt="Testimonies Image" width={500} height={300} className="rounded-lg shadow-lg"/>
                </div>

                {/* Form and text content */}
                <div className="md:flex-1">
                    <div className="border-l-[6px] border-blue-400 pl-3 mb-10">
                        <div
                            className="text-[30px] text-blue-400 leading-none mb-1">{testimonies.leaveATestimonial}</div>
                        <div className="text-[12px] text-black text-opacity-65">
                            {testimonies.testimoniesText}
                        </div>
                    </div>

                    <div style={{fontFamily: 'Bebas Neue, cursive'}}>
                        <form className="flex flex-col gap-7">
                            <div className="flex flex-col md:flex-row gap-5">
                                <div>
                                    <input
                                        style={{backgroundColor: '#F4F4F4'}}
                                        className="w-full border-b-[1px] border-[rgba(0,0,0,0.3)] focus:px-3 duration-150 ease-in-out"
                                        type="text"
                                        placeholder={testimonies.testimoniesFullName}
                                    />
                                </div>

                                <div>
                                    <input
                                        style={{backgroundColor: '#F4F4F4'}}
                                        className="w-full border-b-[1px] border-[rgba(0,0,0,0.3)] focus:px-3 duration-150 ease-in-out"
                                        type="email"
                                        placeholder={testimonies.testimoniesEmail}
                                    />
                                </div>
                            </div>

                            <div>
                                <textarea
                                    style={{backgroundColor: '#F4F4F4'}}
                                    className="border-b-[1px] border-[rgba(0,0,0,0.3)] w-full h-20 focus:px-3 focus:pt-3 duration-150 ease-in-out"
                                    placeholder="Message..."
                                ></textarea>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
