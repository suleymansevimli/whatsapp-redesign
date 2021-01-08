import React from "react";
import useWindowSize from "../../hooks/useWindowsSize";
import MobileLayout from "./MobileLayout";

const Layout = (props) => {

    let {width} = useWindowSize();

    const LayoutGrid = ({children}) => {
        return (
            <div>
                <div>Header</div>
                <div>
                    {children}
                </div>
                <div>Footer</div>
            </div>
        )
    }

    const Render = () => {
        return width > 768
            ? <LayoutGrid {...props}/>
            : <MobileLayout {...props}/>
    }

    return (
        <Render {...props}/>
    );

}

export default Layout;