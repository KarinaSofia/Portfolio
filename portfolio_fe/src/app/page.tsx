import Image from 'next/image';
import styles from './Home.module.css';
import pfImage from '../../public/pfImage.jpg';
import React from "react";
import NavigationBar from "@/components/navigationbar";

export default function Home() {
    // @ts-ignore
    return (
        <div className="flex flex-col h-screen">
            <NavigationBar />
            <div className="flex-grow container mx-auto flex justify-center items-center px-4">
                <div className={`${styles.contentContainer} flex flex-col sm:flex-row justify-center items-center`}>
                    <div className={`${styles.profileImage} hidden sm:block sm:w-1/2`}>
                        <Image src={pfImage} alt="Karina" layout="fill" objectFit="cover" />
                    </div>
                    <div className="sm:w-1/2 w-full p-4 my-6 justify-center">
                        <h1 style={{fontSize: "55px"}}>Karina Evangelista</h1>
                        <h2 className={`${styles.subtitle} my-4`}>Hello~ I’m <span className={styles.highlight}>Karina</span>, I’m a computer science student studying at Champlain College</h2>
                        <a href="/masterCV.pdf" download="masterCV.pdf" className="mb-4">
                            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 w-40 rounded hover:-translate-y-1 transition-transform duration-300">
                                Download CV
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/karina-evangelista" className="ml-4">
                            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 w-40 rounded hover:-translate-y-1 transition-transform duration-300">
                                Go To LinkedIn
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
