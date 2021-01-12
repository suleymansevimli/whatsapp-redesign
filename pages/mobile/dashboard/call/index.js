import React from "react";
import cn from 'classnames'
import style from "../../../../styles/mobile/dashboard/call/index.module.css"
import MobileLayout from "../../../../components/Layout/MobileLayout";
import {Camera, Film, Phone} from "../../../../components/icons";
import TabBar from "../../../../components/TabBar/TabBar";
import {useRouter} from "next/router";

const CallPage = () => {
    const router = useRouter();

    return (
        <MobileLayout
            header={true}
            headerIcon={<Camera/>}
            backAction={()=>router.push("/mobile/dashboard/status")}
            headerTitle={"Call"}
            footer={<TabBar/>}>

            <div className={style.container}>
                <div className={style.item}>
                    <div className={style.information}>
                        <div className={style.avatar}>
                            <img src={"/img/brigitt-bardot.jpg"} alt=""/>
                        </div>
                        <div className={style.nameAndType}>
                            <p className={style.name}>Brigitt Bardot</p>
                            <p className={style.type}>
                                <Phone/>
                                <p>Incoming</p>
                            </p>
                        </div>
                    </div>
                    <div className={style.time}>13:45</div>
                </div>

                <div className={style.item}>
                    <div className={style.information}>
                        <div className={style.avatar}>
                            <img src={"/img/kennedy.jpg"} alt=""/>
                        </div>
                        <div className={style.nameAndType}>
                            <p className={style.name}>Rahmetli Başkan Kennedy</p>
                            <p className={style.type}>
                                <Film/>
                                <p>Outcoming</p>
                            </p>
                        </div>
                    </div>
                    <div className={style.time}>13:45</div>
                </div>

                <div className={style.item}>
                    <div className={style.information}>
                        <div className={style.avatar}>
                            <img src={"/img/fenerbahceli-cemil.jpg"} alt=""/>
                        </div>
                        <div className={style.nameAndType}>
                            <p className={cn([style.name,style.missingCall])}>Fenerbahçeli Cemil</p>
                            <p className={style.type}>
                                <Film/>
                                <p>Missed</p>
                            </p>
                        </div>
                    </div>
                    <div className={style.time}>13:45</div>
                </div>

            </div>

        </MobileLayout>
    )
}

export default CallPage;