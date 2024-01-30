import React from "react";
import NavigationBar from "@/app/components/navigationbar";
import Image from 'next/image';
import img from '../../../public/contactPage.jpg';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavigationBar />
            <div className="flex-grow flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:px-8 lg:px-16">
                    <Image src={img} alt="Contact Image" className="max-w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="w-full md:w-1/2 text-center p-4 md:px-8 lg:px-16">
                    <h1 className="mb-12 text-4xl font-semibold">How To Contact Me</h1>
                    <p className="mb-8">
                        You can contact me through the following means:
                    </p>
                    <h2 className="mb-2">Phone Number: <span className="text-blue-400">(438)-995-9178</span></h2>
                    <h2 className="mb-8">Email Address: <span className="text-blue-400">Karinaevang@hotmail.com</span></h2>
                    <p className="mb-8">
                        Or you can contact me directly by using the following form!
                    </p>
                    <form className="space-y-4">
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Your Message"
                                className="w-full p-2 border rounded-lg"
                                required
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
    )
}

export default Home;
