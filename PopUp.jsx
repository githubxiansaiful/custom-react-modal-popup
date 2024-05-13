import React, { useState } from "react";

const PopUp = () => {
    // State to control the visibility of the modal
    const [modal, setModal] = useState(false);

    // Function to handle modal toggle
    const handleModal = () => {
        setModal(!modal);
        // Toggle 'active-modal' class on the body when modal is open
        document.body.classList.toggle('active-modal', !modal);
    };

    return (
        <>
            {/* Button to toggle the modal */}
            <button onClick={handleModal}>POPUP</button>
            {/* Modal content */}
            {modal && (
                <div className="modal-popup">
                    <div className="modal-content">
                        {/* Button to close the modal */}
                        <button onClick={handleModal} className="modal-close">
                            <i className="fa-solid fa-circle-xmark"></i>
                        </button>
                        {/* Content inside the modal */}
                        <div>
                            {/* Your content goes here */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopUp;
