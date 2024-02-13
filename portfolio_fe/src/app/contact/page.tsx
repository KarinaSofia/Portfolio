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

    // Handle form data change
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await axios.post('/send-email', formData); // Adjust the URL as needed
            console.log(response.data);
            // Handle success (e.g., showing a success message)
        } catch (error) {
            console.error(error);
            // Handle error (e.g., showing an error message)
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
                            className="bg-blue-400 hover:bg-blue-450 text-white font-bold py-2 px-4 rounded hover:-translate-y-1 transition-transform duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
