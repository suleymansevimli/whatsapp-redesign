import React, {useState} from "react";
React.useLayoutEffect = React.useEffect
import InputMask from "react-input-mask";
import style from '../../styles/mobile/index.module.css'
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import {useRouter} from "next/router";
import MobileLayout from "../../components/Layout/MobileLayout";

const Home = () => {

    const [selectCountry, setCountry] = useState({id: 1, label: "Turkey", code: "+90", flag: "/img/flags/turkey.png"})
    const [toggleCountries, setCountries] = useState(false)

    const router = useRouter()

    const Country = React.memo(() => {

        const countries = [
            {id: 1, label: "Turkey", code: "+90", flag: "/img/flags/turkey.png"},
            {id: 2, label: "Italy", code: "+39", flag: "/img/flags/italy.png"},
            {id: 3, label: "Germany", code: "+49", flag: "/img/flags/germany.png"},
            {id: 4, label: "United Kingdom", code: "+44", flag: "/img/flags/united-kingdom.png"}
        ]

        const changeCountry = (country) => {
            setCountries(!toggleCountries)
            setCountry(country)
        }

        const RenderCountries = () => {
            return (
                <div className={style.countries}>
                    {countries.map((e, i) => {
                        return (
                            <div key={i} className={style.selectOption} onClick={() => changeCountry(e)}>
                                <img src={e.flag} alt=""/>
                                <p>{e.label}</p>
                            </div>
                        )
                    })}
                </div>
            )
        }

        return (
            <div className={style.selectContainer}>
                <div className={style.showCase} onClick={() => setCountries(!toggleCountries)}>
                    <div className={style.flag}>
                        <img src={selectCountry.flag} alt={selectCountry.label}/>
                    </div>
                    <div className={style.code}>
                        <p>{selectCountry.code}</p>
                    </div>
                </div>
                {toggleCountries && <RenderCountries/>}
            </div>
        )
    })

    const maskOptions = {
        type:"tel",
        mask: " 999 999 9999",
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

                <div className={style.maskPhone}>
                    <Country/>
                    <InputMask {...maskOptions} className={style.input} >
                        <input/>
                    </InputMask>
                </div>

                <div className={style.sendButton}>
                    <Button onClick={()=>router.push("/mobile/verify-phone")}>Send</Button>
                </div>

                <div className={style.privacy}>
                    <p>Read our Privacy Policy. Tap “Agree & Continue” to accept the Terms of Service.</p>
                </div>

                <div className={style.from}>
                    from <br/>
                    FACEBOOK
                </div>
            </div>
        </MobileLayout>
    )
}

export default Home