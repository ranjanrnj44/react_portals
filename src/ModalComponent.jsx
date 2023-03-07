import React from 'react'

const ModalComponent = ({ onClick }) => {
    return (
        <div style={{ backgroundColor: 'rgba(189, 189, 189, 0.9)', padding: '3rem', width: '100vh', height: '100vh', margin: '0 auto', position: 'absolute', top: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'red', padding: '5rem', borderRadius: '1rem' }}>
                <p>This is the MODAL</p>
                <button type='button' onClick={onClick}>close!</button>
            </div>
        </div>
    )
}

export default ModalComponent