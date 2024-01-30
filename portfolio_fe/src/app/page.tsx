import Image from 'next/image';
import styles from './Home.module.css';
import pfImage from '../../public/pfImage.jpg';
import Navigationbar from "@/app/components/navigationbar";
import HomeFooter from "@/app/components/homeFooter";

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            <Navigationbar />
            <div className="flex-grow container mx-auto flex justify-center items-center px-4">
                <div className={`${styles.contentContainer} flex justify-center items-center`}>
                    <div className={styles.profileImage}>
                        <Image src={pfImage} alt="Karina" layout="fill" objectFit="cover" />
                    </div>
                    <div className="w-1/2 p-4 my-6 justify-center">
                        <h1>Karina Evangelista</h1>
                        <h2 className={`${styles.subtitle} my-4`}>Hello~ I’m <span className={styles.highlight}>Karina</span>, I’m a computer science student studying at Champlain College</h2>
                    </div>
                </div>
            </div>
            <HomeFooter />
        </div>
    );
}
