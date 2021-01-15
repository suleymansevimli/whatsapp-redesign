import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";

export default function Home() {

    const router = useRouter()

    return (
        <div className={styles.container}>
            <Head>
                <title>Welcome to Whatsapp Redesign</title>
            </Head>
            <h2>Welcome To Whatsapp Redesign</h2>
            <main className={styles.main}>
                <div className={styles.mobile} >
                    <video src={"/img/mobile-version.mp4"} autoPlay={true} onClick={()=>router.push("/mobile")} />
                    <h3>Mobile Version</h3>
                </div>

                <div className={styles.desktop} >
                    <img src={"/img/desktop.png"} alt="" onClick={()=>router.push("dashboard")} />
                    <h3>Desktop Version</h3>
                </div>
            </main>
        </div>

    )
}
