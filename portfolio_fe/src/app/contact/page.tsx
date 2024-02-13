'use client';
import React, { useState } from "react";
import NavigationBar from "@/components/navigationbar";
import Image from 'next/image';
import img from '../../../public/contactPage.jpg';
import axios from 'axios';

const Home = () => {
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
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            await axios.post('https://spring-boot-nn3wy.ondigitalocean.app/send-email', formData); // Adjust the URL as needed
            setShowSuccessMessage(true); // Show success message
            setTimeout(() => setShowSuccessMessage(false), 3000); // Hide after 3 seconds
        } catch (error) {
            console.error(error);
            // Optionally, handle error (e.g., showing an error message)
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <NavigationBar />
            <div className="flex-grow flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:px-8 lg:px-16">
                    <Image src={img} alt="Contact Image" className="max-w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="w-full md:w-1/2 text-center p-4 md:px-8 lg:px-16">
                    <h1 className="mb-12 text-4xl font-semibold">How To Contact Me</h1>
                    <h2 className="mb-8">Email Address: <span className="text-blue-400">Karinaevang@hotmail.com</span></h2>
                    <p className="mb-8">
                        Or you can contact me directly by using the following form!
                    </p>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    name="fullName"
                                    placeholder="Your Name"
                                    className="w-full p-2 border rounded-lg"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full p-2 border rounded-lg"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                            <textarea
                                name="body"
                                placeholder="Your Message"
                                className="w-full p-2 border rounded-lg"
                                required
                                onChange={handleChange}
                            ></textarea>
                            </div>
                        <button
                            type="submit"
                            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded hover:-translate-y-1 transition-transform duration-300"
                        >
                            Submit
                        </button>
                    </form>
                    {showSuccessMessage && (
                        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-lg">
                            Success! Your message has been sent.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
