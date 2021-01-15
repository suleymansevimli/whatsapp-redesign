import React, {useRef, useState} from "react";
import style from '../../styles/dashboard/index.module.css'
import cn from "classnames"
import DesktopHeader from "../../components/Header/Desktop/DesktopHeader";
import MessageHeader from "../../components/Header/Message/MessageHeader";
import {AddPerson, Baloon, Call, Status} from "../../components/icons";
import UserInformation from "../../components/UserInformation/UserInformation";
import MessageCard from "../../components/Chat/Card/MessageCard";
import Input from "../../components/Chat/Input/Input";
import Modal from "../../components/Modal/Default/Modal";
import IncomingCall from "../../components/Call/IncomingCall/IncomingCall";


const Home = () => {

    const [incomingCall,setOpenIncomingCall] = useState(false)
    const users = [
        {
            user: {
                avatar: "/img/fenerbahceli-cemil.jpg",
                name: "Fenerbahçeli Cemil"
            },
            lastMessage: "Merhaba orada mısın ?",
            unreadMessageCount: 2,
            lastMessageTime: "13:45",
            type: "received",
            status: "read"
        },
        {
            user: {
                avatar: "/img/kennedy.jpg",
                name: "Rahmetli Başkan Kennedy"
            },
            lastMessage: "Başkanım önemli bir durum var !",
            lastMessageTime: "13:46",
            type: "sent",
            status: "delivered"
        },
        {
            user: {
                avatar: "/img/brigitt-bardot.jpg",
                name: "Brigitt Bardot"
            },
            lastMessage: "Yes you ?",
            lastMessageTime: "13:46",
            type: "sent",
            status: "read"
        },
        {
            user: {
                avatar: "/img/fenerbahceli-cemil.jpg",
                name: "Fenerbahçeli Cemil"
            },
            lastMessage: "Merhaba orada mısın ?",
            unreadMessageCount: 2,
            lastMessageTime: "13:45",
            type: "received",
            status: "read"
        },
        {
            user: {
                avatar: "/img/kennedy.jpg",
                name: "Rahmetli Başkan Kennedy"
            },
            lastMessage: "Başkanım önemli bir durum var !",
            lastMessageTime: "13:46",
            type: "sent",
            status: "delivered"
        },
        {
            user: {
                avatar: "/img/brigitt-bardot.jpg",
                name: "Brigitt Bardot"
            },
            lastMessage: "Yes you ?",
            lastMessageTime: "13:46",
            type: "sent",
            status: "read"
        }
    ]

    const RenderMessages = () => {
        return users.map((e, i) => {
            return <UserInformation type={e.type} status={e.status} key={i} user={e.user}
                                    lastMessageTime={e.lastMessageTime} onClick={() => alert(e.user.name)}
                                    lastMessage={e.lastMessage} unreadMessageCount={e.unreadMessageCount}/>
        })
    }


    return (
        <div className={style.container}>
            <DesktopHeader userAvatar={"/img/avatar.png"} userName={"Süleyman Sevimli"}
                           searchPlaceholder={"Search Messages"}/>
            <MessageHeader/>
            <div className={style.content}>
                <div className={style.menu}>
                    <div className={style.menuItem}>
                        <Baloon className={style.active}/>
                        <p>Message</p>
                    </div>
                    <div className={style.menuItem}>
                        <Call/>
                        <p>Call</p>
                    </div>
                    <div className={style.menuItem}>
                        <Status/>
                        <p>Status</p>
                    </div>
                </div>
                <div className={style.messageList}>
                    <div className={style.switchContainer}>
                        <label className={style.switch}>
                            <input type="checkbox"/>
                            <span className={cn(style.slider)}/>
                        </label>
                        <span className={style.label} onClick={()=>setOpenIncomingCall(true)}>Unread Only</span>
                    </div>

                    <div className={style.list}>
                        <RenderMessages/>
                    </div>

                    <div className={style.addFriend}>
                        <p>You`re reached the end. </p>
                        <p className={style.emphasis} >Add more friends!</p>
                        <AddPerson/>
                    </div>

                </div>
                <div className={style.chat}>
                    <div className={style.messages}>
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
                    <Input/>
                </div>
                <Modal open={false}
                       closeModal={()=>setOpenIncomingCall(!incomingCall)}>
                    <div >
                        adasdasd
                    </div>
                </Modal>

                <IncomingCall open={incomingCall} close={()=>setOpenIncomingCall(!incomingCall)}/>
            </div>
        </div>
    )
}

export default Home;