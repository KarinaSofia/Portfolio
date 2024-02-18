'use client';
import React from "react";
import Image from "next/image";
import styles from './ProjectComponent.module.css';


interface LeftProjectComponentProps {
    title: string;
    imageUrls: string[];
    description: string;
    linkUrl: string;
    linkText?: string;
}

const LeftProjectComponent: React.FC<LeftProjectComponentProps> = ({title, imageUrls, description, linkUrl, linkText }) => {
    const handleClick = () => {
        window.location.href = linkUrl;
    };

    return (
        <div className="flex flex-col md:flex-row max-w-5xl rounded overflow-hidden shadow-lg">
            {/* Column for images - Ensure it comes first for mobile layout */}
            <div className="w-full md:w-1/2">
                {imageUrls.map((url, index) => (
                    <div key={index} className="w-full">
                        <Image src={url} alt={`Project Image ${index + 1}`} width={500} height={300} layout="responsive" />
                    </div>
                ))}
            </div>

            {/* Column for description and button */}
            <div className="flex flex-col justify-between p-6 w-full md:w-1/2">
                <h2 className={styles.projectTitle}>{title}</h2>
                <p className="text-gray-700 text-base mb-4">
                    {description}
                </p>
                <button
                    onClick={handleClick}
                    className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded hover:-translate-y-1 transition-transform duration-300"
                >
                    {linkText || 'Learn More'}
                </button>
            </div>
        </div>
    );
}

export default LeftProjectComponent;
