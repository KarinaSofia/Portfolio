'use client';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import the CSS
import moonicon from '../../public/moonicon.png';

const experience = [
    {
        id: 1,
        date: "06/2021 - 08/2023",
        company: "L'intermarche",
        role: "Server in the deli department & bakery",
        tasks: ["Serve customers", "Prepare food", "Clean the work area"]
    },
    {
        id: 2,
        date: "03/2024 - 06/2024",
        company: "Mcgill University",
        role: "Tester",
        tasks: ["Test software", "Report bugs", "Work with the development team"]
    },
];

const MoonIcon = () => (
    <img src={moonicon.src} alt="Moon Icon" style={{ width: 24, height: 24 }} />
);

const ExperiencePage = () => {
    return (
        <div className="py-10 bg-gray-50 min-h-screen">
            <VerticalTimeline>
                {experience.map((exp) => (
                    <VerticalTimelineElement
                        key={exp.id}
                        date={exp.date}
                    >
                        <h3>{exp.company}</h3>
                        <h4>{exp.role}</h4>
                        {exp.tasks.map((task, index) => (
                            <p key={index}>{task}</p>
                        ))}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default ExperiencePage;
