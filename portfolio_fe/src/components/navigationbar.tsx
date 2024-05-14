import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/logo.svg';
import styles from './NavigationBar.module.css';
import {Locale} from "../../i18n.config";
import {getDictionary} from "../../lib/getDictionary";
import LocaleSwitcher from "@/components/I18n/locale-switcher";

const NavigationBar = async ({lang}: { lang: Locale }) => {
    const {nav} = await getDictionary(lang)
    return (
        <nav className={`${styles.nav} bg-gray-800 text-white p-4 flex items-center justify-between mx-auto`}>
            <div className={`${styles.logo} w-12 h-12 relative`}>
                <Image src={logo} alt="logo" layout="fill" objectFit="cover"/>
            </div>
            <ul className={`${styles.navList} flex justify-center flex-grow`}>
                <LocaleSwitcher/>
                <li className={`${styles.navItem} hover:-translate-y-1 transition-transform duration-300`}>
                    <Link href={`/${lang}`}>
                        <span className={styles.navLink}>{nav.home}</span>
                    </Link>
                </li>
                <li className={`${styles.navItem} hover:-translate-y-1 transition-transform duration-300`}>
                    <Link href={`/${lang}/about`}>
                        <span className={styles.navLink}>{nav.about}</span>
                    </Link>
                </li>
                <li className={`${styles.navItem} hover:-translate-y-1 transition-transform duration-300`}>
                    <Link href={`/${lang}/projects`}>
                        <span className={styles.navLink}>{nav.projects}</span>
                    </Link>
                </li>
                {/*
                <li className={`${styles.navItem} hover:-translate-y-1 transition-transform duration-300`}>
                    <Link href="/testimonies">
                        <span className={styles.navLink}>Testimonies</span>
                    </Link>
                </li>
                */}
            </ul>
            <Link href={`/${lang}/contact`} passHref>
                <button
                    className="bg-blue-400 hover:bg-blue-450 text-white font-bold py-2 px-4 rounded hover:-translate-y-1 transition-transform duration-300">
                    {nav.contact}
                </button>
            </Link>
        </nav>

    );
}

export default NavigationBar;
