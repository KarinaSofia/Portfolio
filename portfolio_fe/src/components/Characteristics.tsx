'use client';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import background from '../../public/aboutMeBackground.png';
import background2 from '../../public/aboutMeBackground2.png';
import background3 from '../../public/aboutMeBackground3.png';
import background4 from '../../public/aboutMeBackground4.png';
import background5 from '../../public/aboutMeBackground5.png';

interface CarouselItem {
    id: number;
    text: string;
    title: string;
    backgroundImg: string;
}

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
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

const Characteristics: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const carouselItems: CarouselItem[] = [
        {
            id: 1,
            text: "I love to bring snacks to my friends and classmates to make them happy!",
            title: "Caring",
            // @ts-ignore
            backgroundImg: background,
        },
        {
            id: 2,
            text: "I work best in teams and I love collaborating with others!",
            title: "Team Player",
            // @ts-ignore
            backgroundImg: background2,
        },
        {
            id: 3,
            text: "I love creating new things and thinking outside the box!",
            title: "Creative",
            // @ts-ignore
            backgroundImg: background3,
        },
        {
            id: 4,
            text: "I work hard to achieve my goals and I never give up!",
            title: "Hard Working",
            // @ts-ignore
            backgroundImg: background4,
        },
        {
            id: 5,
            text: "I love interacting with people and making new friends!",
            title: "Social",
            // @ts-ignore
            backgroundImg: background5,
        },
    ];

    // @ts-ignore
    return (
        <div className="w-full mx-auto" style={{ maxWidth: '60%' }}>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-10-px mx-4"
            >

                {carouselItems.map((item) => (
                    <div key={item.id} className=" h-96 m-4">
                        <Image
                            src={item.backgroundImg}
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                        <div className="absolute w-full pb-6 px-6 text-black">
                            <h2 className="text-xl md:text-2xl font-semibold">{item.title}</h2>
                            <p className="text-sm md:text-base">{item.text}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Characteristics;