import React from "react";
import NavigationBar from "@/app/components/navigationbar";
import LeftProjectComponent from "@/app/components/LeftProjectComponent";
// @ts-ignore
import RightProjectComponent from "@/app/components/RightProjectComponent";
import CORSO from '../../../public/CORSO.png';

const home = () => {
    const exampleImageUrls = [CORSO];
    const exampleDescription = "This is a brief description of the project. Here you can highlight key features or the main objective of the project.";
    const exampleLinkUrl = "#";
    const exampleLinkText = "View Project";
    const exampleTitle = "CORSO";

    return (
        <div className="flex flex-col min-h-screen">
            <NavigationBar />
            <div className="flex-grow flex justify-center items-center">
                <div className="text-center px-4 md:px-8 lg:px-16">
                    <h1 className="mb-20">Projects</h1>
                    <p className="mb-20">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Welcome to the Project Section of my Portfolio! Here, you'll find a curated collection of my work, showcasing a range of skills and interests. For each project, there's a direct link to its GitHub repository, offering a deeper dive into the code and processes behind my creations. Enjoy exploring!
                    </p>

                    {/* Container for project components */}
                    <div className="flex flex-col items-center gap-20">
                        <LeftProjectComponent
                            // @ts-ignore
                            imageUrls={exampleImageUrls}
                            title={exampleTitle}
                            description={exampleDescription}
                            linkUrl={exampleLinkUrl}
                            linkText={exampleLinkText}
                        />
                        <RightProjectComponent
                            // @ts-ignore
                            imageUrls={exampleImageUrls}
                            title={exampleTitle}
                            description={exampleDescription}
                            linkUrl={exampleLinkUrl}
                            linkText={exampleLinkText}
                        />
                        <LeftProjectComponent
                            // @ts-ignore
                            imageUrls={exampleImageUrls}
                            title={exampleTitle}
                            description={exampleDescription}
                            linkUrl={exampleLinkUrl}
                            linkText={exampleLinkText}
                        />
                        <RightProjectComponent
                            // @ts-ignore
                            imageUrls={exampleImageUrls}
                            title={exampleTitle}
                            description={exampleDescription}
                            linkUrl={exampleLinkUrl}
                            linkText={exampleLinkText}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home;
