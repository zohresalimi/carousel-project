import React, { useState, useContext } from 'react';

import ImagesContext from '../context/ImagesContext'

function Modal(props) {
    const { images } = useContext(ImagesContext)

    const [selectedImage, setSelectedImage] = useState(() => props.selectedImage)

    return (
        <div>
            {selectedImage}
        </div>
    );
}

export default Modal;