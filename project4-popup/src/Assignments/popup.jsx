import React, { useState } from 'react';

function Popup() {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <div className="container">
            <button type="submit" className="btn" onClick={openPopup}>Submit</button>
            {isOpen && (
                <div className={`popup ${isOpen ? 'open-popup' : ''}`} id="popup">
                    <h2>Thank you!</h2>
                    <p>Your details have been successfully submitted. Thanks!</p>
                    <button type="button" onClick={closePopup}>OK</button>
                </div>
            )}
        </div>
    );
}

export default Popup;
