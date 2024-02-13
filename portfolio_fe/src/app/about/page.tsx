import React from 'react';
import NavigationBar from "@/components/navigationbar";
import TechnologieContainer from "@/components/TechnologieContainer";
import Characteristics from "@/components/Characteristics";
import Hobbies from "@/components/Hobbies";
import ExperiencePage from "@/components/WorkExperience";

const Home = () => {
    const frontEndTechnologies = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Angular"].join(", ");
    const backEndTechnologies = ["Node.js", "Python", "Java", "C#", "Ruby", "PHP"].join(", ");
    const databaseTechnologies = ["MySQL", "PostgreSQL", "Microsoft SQL Server", "MongoDB", "Cassandra", "Redis"].join(", ");

    return (
        <div>
            <NavigationBar/>
            {/* Header Section */}
            <header className="flex justify-center mt-16">
                <div className="flex flex-col items-center gap-5 w-9/10 md:w-4/5 lg:w-3/5">
                    <h1 className="text-center text-[80px] leading-tight italic font-bebas-neue text-stroke-black">About
                        Me</h1>
                    <p className="text-center text-sm text-gray-700 font-inter">
                        Hello! My name is Karina Sofia Evangelista, I am a 20 year old Computer Science student currently studying at Champlain College! Feel free to explore my about me page to learn more about who I am, what I do and what makes me, me!
                    </p>
                </div>
            </header>

            {/* About Section Divider */}
            <div className="flex justify-center items-center gap-5 mx-10 my-10">
                <hr className="w-1/3"/>
                <p className="text-center font-light text-opacity-25 italic animate-pulse flex gap-2 font-inter">About <span
                    className="hidden md:block">Section</span></p>
                <hr className="w-1/3"/>
            </div>

            {/* About Me Section */}
            <div className="flex flex-col items-center gap-10">

                <div className="flex flex-col items-center gap-5 w-9/10 md:w-4/5 lg:w-3/5">
                    <h2 className="text-center text-[30px] leading-tight italic font-bebas-neue text-stroke-black">5 Ways To Describe Me</h2>
                </div>
                <Characteristics/>

                <div className="flex flex-col items-center gap-5 w-9/10 md:w-4/5 lg:w-3/5">
                    <h2 className="text-center text-[30px] leading-tight italic font-bebas-neue text-stroke-black">What Do I Do?</h2>
                    <p className="text-center text-sm text-gray-700 font-inter">
                        I am a Computer Science student currently studying at Champlain College. I am a hardworking, dedicated, and passionate individual who is always eager to learn and grow. I am a quick learner and I am always open to new opportunities and experiences. I am a very creative person and I love to express my creativity through my work and my hobbies. I am always open to new opportunities and experiences and I am always looking for ways to improve and grow as a person and as a professional.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-5 w-9/10 md:w-4/5 lg:w-3/5">
                    <h2 className="text-center text-[30px] leading-tight italic font-bebas-neue text-stroke-black">My Hobbies</h2>
                </div>
                <Hobbies/>
            </div>

            {/* Programing */}
            <div className="flex justify-center items-center gap-5 mx-10 my-10">
                <hr className="w-1/3"/>
                <p className="text-center font-light text-opacity-25 italic animate-pulse flex gap-2 font-inter">Technical<span
                    className="hidden md:block">Section</span></p>
                <hr className="w-1/3"/>
            </div>

            <div className="flex flex-col items-center gap-10">
                <h2 className="text-center text-[30px] leading-tight italic font-bebas-neue text-stroke-black">Programing Languages</h2>
                <div className='flex gap-5 justify-center flex-wrap'>
                    <TechnologieContainer Title="Front End Technologies" text={frontEndTechnologies}/>
                    <TechnologieContainer Title="Back End Technologies" text={backEndTechnologies}/>
                    <TechnologieContainer Title="Database Technologies" text={databaseTechnologies}/>
                </div>
            </div>

            {/* Work Experience */}
            <div className="flex justify-center items-center gap-5 mx-10 my-10">
                <hr className="w-1/3"/>
                <p className="text-center font-light text-opacity-25 italic animate-pulse flex gap-2 font-inter">Work Experience<span
                    className="hidden md:block">Section</span></p>
                <hr className="w-1/3"/>
            </div>
            <ExperiencePage/>

            {/* Future */}
            <div className="flex justify-center items-center gap-5 mx-10 my-10">
                <hr className="w-1/3"/>
                <p className="text-center font-light text-opacity-25 italic animate-pulse flex gap-2 font-inter">Future Goals<span
                    className="hidden md:block">Section</span></p>
                <hr className="w-1/3"/>
            </div>

        </div>
    );
}
    export default Home;