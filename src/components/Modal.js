import React from 'react';

const Modal = (prop) => {
    const { showProp, setShowProp } = prop;

    return (
        <>
            {showProp &&
                <div id='modal' className="modal" onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <div className="modal-overlay">
                        <button className='modal-close' onClick={() => {
                            setShowProp();
                        }}>Close</button>
                        <p>This is the content of the modal.</p>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal