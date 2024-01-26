import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/logo.svg';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
    return (
        <nav className={`${styles.nav} bg-gray-800 text-white p-4 flex items-center justify-between mx-auto`}>
            <div className={`${styles.logo} w-12 h-12 relative`}>
                <Image src={logo} alt="logo" layout="fill" objectFit="cover" />
            </div>
            <ul className={`${styles.navList} flex justify-center flex-grow`}>
                <li className={`${styles.navItem} hover:-translate-y-1 transition-transform duration-300`}>
                    <Link href="/">
                        <span className={styles.navLink}>Home</span>
                    </Link>
                </li>
                <li className={`${styles.navItem} hover:-translate-y-1 transition-transform duration-300`}>
                    <Link href="/about">
                        <span className={styles.navLink}>About</span>
                    </Link>
                </li>
                <li className={`${styles.navItem} hover:-translate-y-1 transition-transform duration-300`}>
                    <Link href="/projects">
                        <span className={styles.navLink}>Projects</span>
                    </Link>
                </li>
                <li className={`${styles.navItem} hover:-translate-y-1 transition-transform duration-300`}>
                    <Link href="/testimonies">
                        <span className={styles.navLink}>Testimonies</span>
                    </Link>
                </li>
            </ul>
            <button className="bg-blue-400 hover:bg-blue-450 text-white font-bold py-2 px-4 rounded hover:-translate-y-1 transition-transform duration-300">
                Contact
            </button>
        </nav>

    );
}

export default NavigationBar;
