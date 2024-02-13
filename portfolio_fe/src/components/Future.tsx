import React from "react";
import Image from 'next/image';
import img1 from '../../public/future.png';
const Future = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 text-center p-4 md:px-8 lg:px-16">
                    <h1 className="mb-12 text-4xl font-semibold">Where Am I Headed?</h1>
                    <p className="mb-8">
                        I plan to continue my studies in computer science and software engineering. I am also interested in learning more about web development and design. I am currently working on a few projects that I hope to share with you soon!
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:px-8 lg:px-16">
                    <Image src={img1} alt="Astronaut" className="max-w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    )
}

export default Future;
