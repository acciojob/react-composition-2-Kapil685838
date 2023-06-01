import React from 'react';

const Modal = (prop) => {
    const { showProp, setShowProp } = prop;
    return (
        <>
            {showProp && <div className="model-overlay">
                <button className='model-close' onClick={() => {
                    setShowProp(false);
                }}>Close</button>
                <p>This is the content of the modal.</p>
            </div>}
        </>
    )
}

export default Modal