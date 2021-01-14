import React from "react";
import UserInformationComp from "../../components/UserInformation/UserInformation";

export default {
    title: "Components/UserInformation",
    component: UserInformationComp,
    argTypes: {
        type: {
            control: {
                type: "select",
                options: [
                    'sent',
                    'received'
                ]
            }
        },
        status: {
            control: {
                type: "select",
                options: [
                    'pending',
                    'notDelivered',
                    'delivered',
                    'read'
                ]
            }
        },
        user : {
            control: {
                type: "object"
            }
        }
    }
}

export const UserInformationReceived = (args) => {
    return <UserInformationComp {...args}/>
}

UserInformationReceived.args = {

    user: {
        avatar: "http://localhost:3000/img/avatar.png",
        name: "Joe Doe"
    },
    lastMessage: "Hey! Are you okey ?",
    unreadMessageCount: 2,
    lastMessageTime: "13:45",
    type: "received",
    status: "read"

}


export const SentUserInformationDelivered = (args) => {
    return <UserInformationComp {...args}/>
}

SentUserInformationDelivered.args = {
    user: {
        avatar: "http://localhost:3000/img/avatar.png",
        name: "Joe Doe"
    },
    lastMessage: "Yes you ?",
    lastMessageTime: "13:46",
    type: "sent",
    status: "delivered"
}


export const SentUserInformationRead = (args) => {
    return <UserInformationComp {...args}/>
}

SentUserInformationRead.args = {
    user: {
        avatar: "http://localhost:3000/img/avatar.png",
        name: "Joe Doe"
    },
    lastMessage: "Yes you ?",
    lastMessageTime: "13:46",
    type: "sent",
    status: "read"

}

export const SentUserInformationPending = (args) => {
    return <UserInformationComp {...args}/>
}

SentUserInformationPending.args = {

    user: {
        avatar: "http://localhost:3000/img/avatar.png",
        name: "Joe Doe"
    },
    lastMessage: "Yes you ?",
    lastMessageTime: "13:46",
    type: "sent",
    status: "pending"

}

