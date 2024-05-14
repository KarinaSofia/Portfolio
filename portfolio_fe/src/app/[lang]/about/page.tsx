import React from 'react';
import NavigationBar from "@/components/navigationbar";
import TechnologieContainer from "@/components/TechnologieContainer";
import Characteristics from "@/components/Characteristics";
import Hobbies from "@/components/Hobbies";
import ExperiencePage from "@/components/WorkExperience";
import {Locale} from "../../../../i18n.config";
import {getDictionary} from "../../../../lib/getDictionary";
import Image from "next/image";
import img1 from "../../../../public/future.png";
import background from "../../../../public/Education1.png";
import background2 from "../../../../public/Education2.png";

import background6 from "../../../../public/aboutMeBackground.png";
import background7 from "../../../../public/aboutMeBackground2.png";
import background3 from "../../../../public/aboutMeBackground3.png";
import background4 from "../../../../public/aboutMeBackground4.png";
import background5 from "../../../../public/aboutMeBackground5.png";
import img2 from "../../../../public/img2.jpg";
import img3 from "../../../../public/img3.jpg";
import img4 from "../../../../public/img4.jpg";
import img5 from "../../../../public/img5.jpg";
import img7 from "../../../../public/img7.jpg";
import img8 from "../../../../public/img8.jpg";
import img9 from "../../../../public/img9.jpg";
import img10 from "../../../../public/img10.jpg";
import img13 from "../../../../public/img13.jpg";

interface CarouselItem {
    id: number;
    text: string;
    title: string;
    backgroundImg: string; // Adjusted type to string for example clarity; use the correct type for your project setup
}

const Home = async ({params: {lang},}: { params: { lang: Locale } }) => {


    const {about} = await getDictionary(lang)

    const carouselItems: CarouselItem[] = [
        {
            id: 1,
            text: about.degree,
            title: about.highSchool,
            // @ts-ignore
            backgroundImg: background, // Ensure this matches the type expected by Image src prop
        },
        {
            id: 2,
            text: about.degree2,
            title: about.college,
            // @ts-ignore
            backgroundImg: background2, // Ensure this matches the type expected by Image src prop
        },
    ];

    // @ts-ignore
    const carouselItemsCaracteristic: CarouselItem[] = [
        {
            id: 1,
            text: about.text,
            title: about.title,
            // @ts-ignore
            backgroundImg: background6,
        },
        {
            id: 2,
            text: about.text2,
            title: about.title2,
            // @ts-ignore
            backgroundImg: background7,
        },
        {
            id: 3,
            text: about.text3,
            title: about.title3,
            // @ts-ignore
            backgroundImg: background3,
        },
        {
            id: 4,
            text: about.text4,
            title: about.title4,
            // @ts-ignore
            backgroundImg: background4,
        },
        {
            id: 5,
            text: about.text5,
            title: about.title5,
            // @ts-ignore
            backgroundImg: background5,
        },
    ];

    const carouselItemsHobbies: CarouselItem[] = [
        {
            id: 3,
            title: about.title10,
            // @ts-ignore
            backgroundImg: img3,
        },
        {
            id: 4,
            title: about.title11,
            // @ts-ignore
            backgroundImg: img4,
        },
        {
            id: 5,
            title: about.title12,
            // @ts-ignore
            backgroundImg: img5,
        },
        {
            id: 7,
            title: about.title13,
            // @ts-ignore
            backgroundImg: img7,
        },
        {
            id: 8,
            title: about.title12,
            // @ts-ignore
            backgroundImg: img8,
        },
        {
            id: 9,
            title: about.title11,
            // @ts-ignore
            backgroundImg: img9,
        },
        {
            id: 10,
            title: about.title14,
            // @ts-ignore
            backgroundImg: img10,
        },
        {
            id: 13,
            title: about.title14,
            // @ts-ignore
            backgroundImg: img13,
        },
    ];

    return (
        <div>
            <NavigationBar lang={lang}/>
            <header className="flex justify-center mt-16">
                <div className="flex flex-col items-center gap-5 w-9/10 md:w-4/5 lg:w-3/5">
                    <h1 className="text-center text-[80px] leading-tight italic font-bebas-neue text-stroke-black">{about.aboutTitle}</h1>
                    <p className="text-center text-sm text-gray-700 font-inter">
                        {about.aboutDescription}
                    </p>
                </div>
            </header>

            {/* About Section Divider */}
            <div className="flex justify-center items-center gap-5 mx-10 my-10">
                <hr className="w-1/3"/>
                <p className="text-center font-light text-opacity-25 italic animate-pulse flex gap-2 font-inter">{about.aboutDivider}</p>
                <hr className="w-1/3"/>
            </div>

            {/* About Me Section */}
            <div className="flex flex-col items-center gap-10">

                <div className="flex flex-col items-center gap-5 w-9/10 md:w-4/5 lg:w-3/5">
                    <h2 className="text-center text-[30px] leading-tight italic font-bebas-neue text-stroke-black">{about.aboutWaysToDescribe}</h2>
                </div>
                <Characteristics carouselItems={carouselItemsCaracteristic} />

                <div className="flex flex-col items-center gap-5 w-9/10 md:w-4/5 lg:w-3/5">
                    <h2 className="text-center text-[30px] leading-tight italic font-bebas-neue text-stroke-black">{about.aboutWhatIDo}</h2>
                    <p className="text-center text-sm text-gray-700 font-inter">
                        {about.aboutWhatIDoDescription}
                    </p>
                </div>

                <div className="flex flex-col items-center gap-5 w-9/10 md:w-4/5 lg:w-3/5">
                    <h2 className="text-center text-[30px] leading-tight italic font-bebas-neue text-stroke-black">{about.hobbiesTitle}</h2>
                </div>
                <Hobbies carouselItems={carouselItemsHobbies}/>
            </div>

            {/* Programing */}
            <div className="flex justify-center items-center gap-5 mx-10 my-10">
                <hr className="w-1/3"/>
                <p className="text-center font-light text-opacity-25 italic animate-pulse flex gap-2 font-inter">{about.technicalSectionTitle}</p>
                <hr className="w-1/3"/>
            </div>

            <div className="flex flex-col items-center gap-10">
                <h2 className="text-center text-[30px] leading-tight italic font-bebas-neue text-stroke-black">{about.programmingLanguagesTitle}</h2>
                <div className='flex gap-5 justify-center flex-wrap'>
                    <TechnologieContainer Title={about.frontEndTechnologiesTitle} text={about.frontEndTechnologies}/>
                    <TechnologieContainer Title={about.backEndTechnologiesTitle} text={about.backEndTechnologies}/>
                    <TechnologieContainer Title={about.databaseTechnologiesTitle} text={about.databaseTechnologies}/>
                </div>
            </div>

            {/* Work Experience */}
            <div className="flex justify-center items-center gap-5 mx-10 my-10">
                <hr className="w-1/3"/>
                <p className="text-center font-light text-opacity-25 italic animate-pulse flex gap-2 font-inter">
                    {about.workExperienceSectionTitle}
                </p>
                <hr className="w-1/3"/>
            </div>
            <ExperiencePage/>

            {/* Education */}
            <div className="flex justify-center items-center gap-5 mx-10 my-10">
                <hr className="w-1/3"/>
                <p className="text-center font-light text-opacity-25 italic animate-pulse flex gap-2 font-inter">
                    {about.educationSectionTitle}
                </p>
                <hr className="w-1/3"/>
            </div>
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

            {/* Future */}
            <div className="flex justify-center items-center gap-5 mx-10 my-10">
                <hr className="w-1/3"/>
                <p className="text-center font-light text-opacity-25 italic animate-pulse flex gap-2 font-inter">
                    {about.futureGoalsSectionTitle}
                </p>
                <hr className="w-1/3"/>
            </div>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow flex flex-col md:flex-row justify-center items-center">
                    <div className="w-full md:w-1/2 text-center p-4 md:px-8 lg:px-16">
                        <h1 className="mb-12 text-4xl font-semibold">{about.whereAmIHeaded}</h1>
                        <p className="mb-8">{about.whereDesc}
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:px-8 lg:px-16">
                        <Image src={img1} alt="Astronaut" className="max-w-full h-auto rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>

        </div>
    );
}
    export default Home;