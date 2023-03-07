import React from 'react'
import { createPortal } from 'react-dom';
//component
import ModalComponent from './ModalComponent';
import { useState } from 'react';

export const PortalComponent = () => {
    //state
    let [openModal, setOpenModal] = useState(false);
    return (
        <>
            <h3>General DOM content 1</h3>
            {
                createPortal(openModal && <ModalComponent onClick={() => setOpenModal(prev => !prev)} />, document.body)
            }
            <h3>General DOM content 2</h3>
            <button type='button' onClick={() => setOpenModal(prev => !prev)}>open!</button>
        </>
    )
}

