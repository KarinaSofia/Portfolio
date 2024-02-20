'use client';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import img1 from '../../public/img1.jpg';
import img2 from '../../public/img2.jpg';
import img3 from '../../public/img3.jpg';
import img4 from '../../public/img4.jpg';
import img5 from '../../public/img5.jpg';
import img6 from '../../public/img6.jpg';
import img7 from '../../public/img7.jpg';
import img8 from '../../public/img8.jpg';
import img9 from '../../public/img9.jpg';
import img10 from '../../public/img10.jpg';
import img11 from '../../public/img11.jpg';
import img12 from '../../public/img12.jpg';
import img13 from '../../public/img13.jpg';

interface CarouselItem {
    id: number;
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

const Hobbies: React.FC = () => {
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
            title: "Hangout With Friends",
            // @ts-ignore
            backgroundImg: img1,
        },
        {
            id: 2,
            title: "Sleeping",
            // @ts-ignore
            backgroundImg: img2,
        },
        {
            id: 3,
            title: "Hanging Out With Friends",
            // @ts-ignore
            backgroundImg: img3,
        },
        {
            id: 4,
            title: "Adventuring",
            // @ts-ignore
            backgroundImg: img4,
        },
        {
            id: 5,
            title: "Skiing",
            // @ts-ignore
            backgroundImg: img5,
        },
        {
            id: 7,
            title: "Drawing",
            // @ts-ignore
            backgroundImg: img7,
        },
        {
            id: 8,
            title: "Skiing",
            // @ts-ignore
            backgroundImg: img8,
        },
        {
            id: 9,
            title: "Adventuring",
            // @ts-ignore
            backgroundImg: img9,
        },
        {
            id: 10,
            title: "Fitness",
            // @ts-ignore
            backgroundImg: img10,
        },
        {
            id: 13,
            title: "Fitness",
            // @ts-ignore
            backgroundImg: img13,
        },
    ];

    // @ts-ignore
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
                    <div key={item.id} className=" h-96 m-4">
                        <Image
                            src={item.backgroundImg}
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                        <div className="absolute w-full pb-6 px-6 text-white font-bebas-neue">
                            <h2 className="text-xl md:text-2xl font-semibold">{item.title}</h2>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Hobbies;