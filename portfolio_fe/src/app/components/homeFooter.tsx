import React from "react";
import styles from './HomeFooteer.module.css';

const homeFooter = () => {
    return (
        <footer className={`${styles.customFooter} bg-white text-black p-4 flex items-center justify-between mx-auto`}>
            <h1>footer</h1>
        </footer>
    );
}

export default homeFooter;
