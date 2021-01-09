import React, {useState} from "react";
import style from '../../../styles/mobile/dashboard/index.module.css'
import MobileLayout from "../../../components/Layout/MobileLayout";
import UserInformation from "../../../components/UserInformation/UserInformation";

const Dashboard = () => {

    const users = [
        {avatar: "/img/avatar.png", name: "Nadia Comaneci"},
        {avatar: "/img/fenerbahceli-cemil.jpg", name: "Fenerbahçeli Cemil"},
        {avatar: "/img/brigitt-bardot.jpg", name: "Brigitte Bardot"},
        {avatar: "/img/kaleci-mayer.jpg", name: "Kaleci Mayer"},
        {avatar: "/img/kennedy.jpg", name: "Rahmetli Başkan Kennedy"},
    ]


    return (
        <MobileLayout header headerTitle={"Messages"} tabBar>
            <div className={style.container}>
                <UserInformation type={"received"} user={users[0]} unreadMessageCount={1} lastMessageTime={"13:45"} lastMessage={"Hello :)"}/>
                <UserInformation type={"sent"} user={users[1]} lastMessageTime={"13:45"} status={"read"} lastMessage={"Halı saha maçı kaçtaydı ?"}/>
                <UserInformation type={"received"} user={users[2]} unreadMessageCount={1} lastMessageTime={"13:45"} lastMessage={"Hi :) What are you doing now?"}/>
                <UserInformation type={"received"} user={users[3]} unreadMessageCount={1} lastMessageTime={"13:45"} lastMessage={"Benim ayağım sakat gelemiyorum."}/>
                <UserInformation type={"sent"} status={"pending"} user={users[4]} lastMessageTime={"13:45"} lastMessage={"Başkanım önemli bir durum var !"}/>
            </div>
        </MobileLayout>
    )
}

export default Dashboard;