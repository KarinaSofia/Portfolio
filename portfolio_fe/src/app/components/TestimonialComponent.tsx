'use client';
import React, { useState } from 'react';

const TestimonialComponent = () => {
    // LoadingIcon component for displaying while fetching data
    const LoadingIcon = () => (
        <svg className="animate-spin" width="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG Path */}
        </svg>
    );

    // ProfileIcon component for displaying user profile icon
    const ProfileIcon = () => (
        <svg width="30" className='mt-2' viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG Path */}
        </svg>
    );

    // State to control the loading of testimonials
    const [isLoadingNewTestimonials, setIsLoadingNewTestimonials] = useState(false);

    return (
        <div className='px-10 py-10 border w-full md:w-[25rem] h-[270px] rounded-lg shadow-xl'>

            {isLoadingNewTestimonials ? (
                <div className='flex justify-center items-center h-full'>
                    <LoadingIcon />
                </div>
            ) : (
                <>
                    <div className='flex flex-row gap-3 items-center'>
                        <div className='w-12 h-12 bg-white border-2 border-black shadow-md rounded-full flex justify-center items-center'>
                            <ProfileIcon />
                        </div>
                        <div className='flex flex-col'>
                            <div style={{ fontFamily: 'Bebas Neue, cursive' }} className="text-lg">Full Name</div>
                            <div className="text-sm">Email@example.com</div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 mt-5 text-justify text-sm italic opacity-60'>
                        “Step into a world where ideas come to life and creativity knows no bounds. This is the space where each pixel, line of code, and concept converges to tell a unique story.”
                        <span className='italic opacity-50'>- Full Name</span>
                    </div>
                </>
            )}

        </div>
    );
};

export default TestimonialComponent;
