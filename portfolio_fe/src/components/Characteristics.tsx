'use client';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'; // Importing Image from next/image

interface CarouselItem {
    id: number;
    text: string;
    title: string;
    backgroundImg: string;
}

interface CharacteristicsProps {
    carouselItems: CarouselItem[];
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

const Characteristics: React.FC<CharacteristicsProps> = ({ carouselItems }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full mx-auto sm:w-4/5">
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
                itemClass="carousel-item-padding-10-px mx-2"
            >
                {carouselItems.map((item) => (
                    <div key={item.id} className="relative h-96 m-4">
                        <Image
                            src={item.backgroundImg}
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                        <div className="absolute top-0 w-full pt-6 px-6 text-black">
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
