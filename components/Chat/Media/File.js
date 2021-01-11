import React from "react";
import PropTypes from 'prop-types'
import style from './file.module.css'
import {DocFile} from "../../icons";

const File = ({fileName}) => {
    return (
        <div className={style.container}>
            <DocFile/>
            <p>{fileName}</p>
        </div>
    )
}

export default File;

File.propTypes = {
    fileName: PropTypes.string
}