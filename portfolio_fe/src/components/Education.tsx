import React from 'react';
import Image from 'next/image';
import background from '../../public/aboutMeBackground.png';
import background2 from '../../public/aboutMeBackground2.png';

interface CarouselItem {
    id: number;
    text: string;
    title: string;
    backgroundImg: string; // Adjusted type to string for example clarity; use the correct type for your project setup
}

const Education: React.FC = () => {
    const carouselItems: CarouselItem[] = [
        {
            id: 1,
            text: "High School Degree",
            title: "Vincent Massey Collegiate",
            // @ts-ignore
            backgroundImg: background, // Ensure this matches the type expected by Image src prop
        },
        {
            id: 2,
            text: "DEC in Computer Science",
            title: "Champlain College",
            // @ts-ignore
            backgroundImg: background2, // Ensure this matches the type expected by Image src prop
        },
    ];

    return (
        <div className="flex flex-wrap justify-center mx-auto" style={{ maxWidth: '60%' }}>
            {carouselItems.map((item) => (
                <div key={item.id} className="w-full md:w-1/2 p-4">
                    <div className="relative h-96 w-auto">
                        <Image
                            src={item.backgroundImg}
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                        <div className="absolute top-0 w-full p-6">
                            <h2 className="text-xl text-black md:text-2xl font-semibold">{item.title}</h2>
                            <p className="text-sm text-black md:text-base">{item.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Education;
