'use client';
import React from "react";
import NavigationBar from "@/components/navigationbar";
import LeftProjectComponent from "@/components/LeftProjectComponent";
import CORSO from '../../../../public/CORSO.png';
import PetClinic from '../../../../public/PetClinic.png';
import RightProjectComponent from "@/components/RIghtProjectComponent";
import {Locale} from "../../../../i18n.config";
import {getDictionary} from "../../../../lib/getDictionary";

const home = async ({params: {lang},}: { params: { lang: Locale } }) => {

    const {projects} = await getDictionary(lang)

    const exampleImageUrls = [CORSO];
    const exampleDescription = projects.projectCorso;
    const exampleLinkUrl = "https://github.com/DylanBrass/Corso-Electrique-code";
    const exampleLinkText = projects.viewRepo;
    const exampleTitle = "CORSO";

    const exampleImageUrls2 = [PetClinic];
    const exampleDescription2 = projects.projectPetClinic;
    const exampleLinkUrl2 = "https://github.com/cgerard321/champlain_petclinic";
    const exampleLinkText2 = projects.viewRepo;
    const exampleTitle2 = projects.petClinicTitle;

    const corsoLink = "https://corsoelectriqueinc.tech/";


    return (
        <div className="flex flex-col min-h-screen">
            <NavigationBar lang={lang}/>
            {/* Header Section */}
            <header className="flex justify-center mt-16">
                <div className="flex flex-col items-center gap-5 w-9/10 md:w-4/5 lg:w-3/5">
                    <h1 className="text-center text-[80px] leading-tight italic font-bebas-neue text-stroke-black">Projects</h1>
                    <p className="text-center text-sm text-gray-700 font-inter">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        {projects.projectWelcomeText}
                    </p>
                </div>
            </header>

            <div className="flex justify-center items-center gap-5 mx-10 my-10">
                <hr className="w-1/3"/>
                <p className="text-center font-light text-opacity-25 italic animate-pulse flex gap-2 font-inter">Projects<span
                    className="hidden md:block">{projects.projectSectionText}</span></p>
                <hr className="w-1/3"/>
            </div>

            <div className="flex-grow flex justify-center items-center">
                {/* Container for project components */}
                <div className="flex flex-col items-center gap-20">
                    <LeftProjectComponent
                        // @ts-ignore
                        imageUrls={exampleImageUrls}
                        title={exampleTitle}
                        description={exampleDescription}
                        linkUrl={exampleLinkUrl}
                        linkText={exampleLinkText}
                        linkUrl2={corsoLink}
                    />
                    <LeftProjectComponent
                        // @ts-ignore
                        imageUrls={exampleImageUrls2}
                        title={exampleTitle2}
                        description={exampleDescription2}
                        linkUrl={exampleLinkUrl2}
                        linkText={exampleLinkText2}
                        linkUrl2={exampleLinkUrl2}
                    />
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default home;
