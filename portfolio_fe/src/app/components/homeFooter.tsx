import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './NavigationBar.module.css';

const homeFooter = () => {
    return (
       <footer className={`${styles.footer} bg-gray-800 text-white p-4 flex items-center justify-between mx-auto`}>
           <h1>footer</h1>
       </footer>
    );
}

export default homeFooter;
