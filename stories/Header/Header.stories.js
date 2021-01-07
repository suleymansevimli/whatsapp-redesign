import React from "react";
import HeaderComp from "../../components/Header/Header";

export default {
    title: "Components/Header",
    component: HeaderComp
}

export const Header = (args) => {
    return <HeaderComp {...args}/>
}

Header.args = {
    title: "Messages"
}