import NavigationBar from "@/components/navigationbar";
import React from 'react';
import {Locale} from "../../../../i18n.config";
import Image from "next/image";
import img from "../../../../public/contactPage.jpg";
import {getDictionary} from "../../../../lib/getDictionary";


const Home = async ({params: {lang},}: { params: { lang: Locale } }) => {
    const {contact} = await getDictionary(lang)


    return (
        <div className="flex flex-col min-h-screen">
            <NavigationBar lang={lang}/>
            <div className="flex-grow flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:px-8 lg:px-16">
                    <Image src={img} alt="Contact Image" className="max-w-full h-auto rounded-lg shadow-lg"/>
                </div>
                <div className="w-full md:w-1/2 text-center p-4 md:px-8 lg:px-16">
                    <h1 className="mb-12 text-4xl font-semibold">{contact.howToContactMe}</h1>
                    <h2 className="mb-8">{contact.emailAddressTitle} <span className="text-blue-400"
                                                                           style={{userSelect: 'none'}}>Karinaevang@hotmail.com</span>
                    </h2>
                    <p className="mb-8">
                        {contact.contactDirectly}
                    </p>
                    <a href="https://www.instagram.com/karinaevangelistaa/" className="ml-4">
                        <button
                            className="mt-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 w-40 rounded hover:-translate-y-1 transition-transform duration-300">
                            {contact.goToInstagram}
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/karina-evangelista" className="ml-4">
                        <button
                            className="mt-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 w-40 rounded hover:-translate-y-1 transition-transform duration-300">
                            {contact.goToLinkedIn}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
