import React from "react";
import style from "../../styles/mobile/verify-phone.module.css";
import InputMask from "react-input-mask";
import Button from "../../components/Button/Button";
import {useRouter} from "next/router";
import MobileLayout from "../../components/Layout/MobileLayout";

const VerifyPhone = () => {

    const router = useRouter()

    const maskOptions = {
        type:"tel",
        mask: "999 999",
        alwaysShowMask: true,
        maskPlaceholder: "-"
    }

    return (
        <MobileLayout bgImage={"/img/background.png"}>
            <div className={style.container}>
                <div className={style.logo}>
                    <img src={"/img/logo.svg"} alt=""/>
                </div>

                <div className={style.welcomeTitle}>
                    <h3>Welcome to WhatsApp</h3>
                </div>

                <div className={style.helperText}>
                    <p>Enter SMS Code</p>
                </div>

                <div className={style.maskPhone}>
                    <InputMask {...maskOptions} className={style.input}/>
                </div>

                <div className={style.sendButton}>
                    <Button onClick={()=>router.push("/mobile/dashboard")}>Done</Button>
                </div>

            </div>
        </MobileLayout>
    )
}

export default VerifyPhone;
