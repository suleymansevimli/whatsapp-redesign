import React from "react";
import style from '../../../../styles/mobile/dashboard/chat/index.module.css'
import MobileLayout from "../../../../components/Layout/MobileLayout";
import {BackArrow} from "../../../../components/icons";
import Input from "../../../../components/Chat/Input/Input";
import {useRouter} from "next/router";
import MessageCard from "../../../../components/Chat/Card/MessageCard";

const Chat = () => {

    const router = useRouter();

    const backAction = () => {
        return router.push("/mobile/dashboard");
    }

    return (
        <MobileLayout header backTitle={"Message"}
                      headerIcon={<BackArrow style={{fontSize:"16px",marginRight:"5px"}}/>}
                      headerTitle={"Rahmetli Başkan Kennedy"}
                      avatar={"/img/kennedy.jpg"}
                      backAction={()=>backAction()}
                      avatarClick={()=>router.push("/mobile/dashboard/chat/friend-profile")}
                      footer={<Input/>} >
            <div className={style.container}>

                <div className={style.dateTime}>
                    <span>Today</span>
                </div>

                <MessageCard type={"sent"} status={"read"}>
                    Başkanım önemli bir durum var.
                </MessageCard>

                <MessageCard type={"received"}>
                    Merhaba
                </MessageCard>

                <MessageCard
                    type={"sent"}
                    status={"delivered"}
                    media={"audio"}
                    src={"/audio/audio.mp3"}/>

                <MessageCard
                    type={"sent"}
                    status={"delivered"}
                    media={"file"}
                    fileName={"Report.doc"}
                    src={"/"}/>

                <MessageCard
                    type={"received"}
                    media={"file"}
                    fileName={"Report-Edit.docx"}
                    src={"/"}/>

                <MessageCard type={"received"}>
                    Düzenledim.
                </MessageCard>

            </div>
        </MobileLayout>
    )
}

export default Chat;