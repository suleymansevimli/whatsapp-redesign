import React from "react";
import style from '../../../styles/mobile/dashboard/index.module.css'
import MobileLayout from "../../../components/Layout/MobileLayout";
import UserInformation from "../../../components/UserInformation/UserInformation";
import {SwipeableList} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import {useRouter} from "next/router";
import {Camera} from "../../../components/icons";
import TabBar from "../../../components/TabBar/TabBar";

const Dashboard = () => {

    const router = useRouter();

    const users = [
        {
            user: {
                avatar: "/img/avatar.png",
                name: "Nadia Comaneci"
            },
            type: "received",
            route: "/mobile/dashboard/chat/1",
            unreadMessageCount: 1,
            lastMessageTime: "13:45",
            lastMessage: "Hello :)"
        },
        {
            user: {
                avatar: "/img/fenerbahceli-cemil.jpg",
                name: "Fenerbahçeli Cemil"
            },
            type: "sent",
            status: "read",
            route: "/mobile/dashboard/chat/1",
            lastMessageTime: "13:45",
            lastMessage: "Halı saha maçı kaçtaydı ?"
        },
        {
            user: {
                avatar: "/img/brigitt-bardot.jpg",
                name: "Brigitte Bardot"
            },
            type: "received",
            route: "/mobile/dashboard/chat/1",
            unreadMessageCount: 1,
            lastMessageTime: "13:45",
            lastMessage: "Hi :) What are you doing now ?"
        },
        {
            user: {
                avatar: "/img/kaleci-mayer.jpg",
                name: "Kaleci Mayer"
            },
            type: "received",
            route: "/mobile/dashboard/chat/1",
            unreadMessageCount: 1,
            lastMessageTime: "13:45",
            lastMessage: "Benim ayağım sakat gelemiyorum."
        },
        {
            user: {
                avatar: "/img/kennedy.jpg",
                name: "Rahmetli Başkan Kennedy"
            },
            type: "sent",
            status: "pending",
            route: "/mobile/dashboard/chat/1",
            lastMessageTime: "13:45",
            lastMessage: "Başkanım önemli bir durum var !"
        },
    ];

    const Render = () => {
        return users.map((e, i) => {
            return (
                <UserInformation onClick={() => router.push(e.route)}
                                 type={e.type}
                                 user={e.user}
                                 status={e.status}
                                 unreadMessageCount={e.unreadMessageCount}
                                 lastMessageTime={e.lastMessageTime}
                                 lastMessage={e.lastMessage}/>
            )
        })
    }

    return (
        <MobileLayout footer={<TabBar/>} header headerTitle={"Messages"} tabBar headerIcon={<Camera/>}>
            <div className={style.container}>
                <SwipeableList>
                    <Render/>
                </SwipeableList>
            </div>
        </MobileLayout>
    )
}

export default Dashboard;