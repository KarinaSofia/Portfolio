import React from 'react';

// @ts-ignore
const TechnologieContainer = ({ Title, text }) => {

    return (
        <div className='bg-white py-8 px-8 mt-4 md:w-[40%] lg:w-[30%] xl:w-[30%] rounded-lg flex flex-col gap-3 shadow-md'>
            <h3 className=' tracking-wide text-center text-blue-400'>
                {Title}
            </h3>
            <div className="text-justify text-sm opacity-70">
                {text}
            </div>
        </div>
    );
};

export default TechnologieContainer;
