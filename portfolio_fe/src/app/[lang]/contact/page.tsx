'use client';
import React, { useState } from "react";
import NavigationBar from "@/components/navigationbar";
import Image from 'next/image';
import img from '../../../../public/contactPage.jpg';
import axios from 'axios';
import Swal from 'sweetalert2';
import {Locale} from "../../../../i18n.config";
import {getDictionary} from "../../../../lib/getDictionary";


const Home = async ({params: {lang},}: { params: { lang: Locale } }) => {
    // State to store form data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        body: '',
    });

    // State to manage the visibility of the success message
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    // Handle form data change
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            await axios.post('https://spring-boot-nn3wy.ondigitalocean.app/email/send-email', formData);
            Swal.fire({
                icon: 'success',
                title: 'Thank you!',
                text: 'Your message has been successfully sent.',
                confirmButtonColor: '#3085d6',
            });
            setFormData({
                fullName: '',
                email: '',
                body: '',
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                confirmButtonColor: '#d33',
            });
        }
    };

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
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <input
                                name="fullName"
                                placeholder={contact.placeholderName}
                                className="w-full p-2 border rounded-lg"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder={contact.placeholderEmail}
                                className="w-full p-2 border rounded-lg"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <textarea
                                name="body"
                                placeholder={contact.placeholderMessage}
                                className="w-full p-2 border rounded-lg"
                                required
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded hover:-translate-y-1 transition-transform duration-300">
                            {contact.btnSubmit}
                        </button>
                    </form>
                    {showSuccessMessage && (
                        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-lg">
                            {contact.messageSentEmail}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
