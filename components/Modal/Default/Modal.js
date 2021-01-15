import React from "react";
import ReactModal from 'react-modal'

ReactModal.setAppElement("#__next")

const Modal = ({open, closeModal, children, afterOpenModal}) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: 0,
            borderRadius: 15,
            border: "none"
        }
    };

    return (
        <div>
            <ReactModal
                isOpen={open}
                overlayClassName="Overlay"
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">

                {children}

            </ReactModal>
        </div>
    );
}

export default Modal;