'use client';
import React from 'react';
import Head from 'next/head';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import the CSS
import moonicon from '../../public/moonicon.png';

const experience = [
    {
        id: 1,
        date: "03/2024 - 06/2024",
        company: "Mcgill University",
        role: "Full Stack Developer Intern, Network Administrator Intern & IT Support",
        tasks: ["Programing", "Report & fix bugs", "Managing VM & Network", "Helping users with IT problems"]
    },
    {
        id: 2,
        date: "03/2024 - XX/2024",
        company: "Jean Coutu",
        role: "Cashier",
        tasks: ["Cash Management", "Customer Service", "Issuer of Loto-Quebec & Opus tickets"]
    },
    {
        id: 3,
        date: "06/2021 - 08/2023",
        company: "L'intermarche",
        role: "Server in the deli department & bakery",
        tasks: ["Serve customers", "Prepare food", "Clean the work area"]
    },
];

const MoonIcon = () => (
    <img src={moonicon.src} alt="Moon Icon" style={{ width: 24, height: 24 }} />
);

const ExperiencePage = () => {
    return (
        <>
            <Head>
                <title>My Experience</title>
                <meta name="description" content="A timeline of my professional experience." />
            </Head>
            <div className="py-10 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <VerticalTimeline layout="1-column-left">
                        {experience.map((exp) => (
                            <VerticalTimelineElement
                                key={exp.id}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                                date={exp.date}
                                iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                                icon={<MoonIcon />}
                            >
                                <h3 className="font-bold text-lg">{exp.company}</h3>
                                <h4 className="text-md mb-4">{exp.role}</h4>
                                <ul className="list-disc ml-5">
                                    {exp.tasks.map((task, index) => (
                                        <li key={index}>{task}</li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
};

export default ExperiencePage;