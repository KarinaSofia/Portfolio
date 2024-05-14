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
                <Characteristics/>

                <div className="flex flex-col items-center gap-5 w-9/10 md:w-4/5 lg:w-3/5">
                    <h2 className="text-center text-[30px] leading-tight italic font-bebas-neue text-stroke-black">{about.aboutWhatIDo}</h2>
                    <p className="text-center text-sm text-gray-700 font-inter">
                        {about.aboutWhatIDoDescription}
                    </p>
                </div>

                <div className="flex flex-col items-center gap-5 w-9/10 md:w-4/5 lg:w-3/5">
                    <h2 className="text-center text-[30px] leading-tight italic font-bebas-neue text-stroke-black">{about.hobbiesTitle}</h2>
                </div>
                <Hobbies/>
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

        </div>
    );
}
    export default Home;