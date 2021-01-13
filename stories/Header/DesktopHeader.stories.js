import React from "react";
import DesktopHeaderComp from "../../components/Header/Desktop/DesktopHeader";

export default {
    title: "Components/DesktopHeader",
    component: DesktopHeaderComp
}

export const DesktopHeader = (args) => {
    return <DesktopHeaderComp {...args} />
}