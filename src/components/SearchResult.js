import React, { useState } from 'react'; 

import Modal from './Modal'; 

import './SearchResult.css'


function SearchResult(props) {
    const [ selectedImage, setSelectedImage] = useState('')
    const [ showModal, setModalShow ] = useState(false)
    
    const { imageList } = props;

    const handelImageClick = (imageId) => {
        setSelectedImage(imageId)
        setModalShow(true)
    }

    return (
        <>
            <div className="result-wrapper">
                {imageList.map((img)=> { 
                    return (
                        <div className="box-wrapper" key={img.id} onClick={() => handelImageClick(img.id)}>
                            <div className="img-wrapper">
                                <img src={img.urls.thumb}/>
                            </div>
                            <div className="info-wrapper">
                                <a href="" className="authorAvatar">
                                    <img src={img.user.profile_image}/>
                                </a>
                                <div className="titleAndAuthor">
                                    <h3 className="title">
                                        <a href="">{img.description}</a>
                                    </h3>
                                    <p className="authorName">
                                        <a href="">{img.user.name}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            { showModal && <Modal selectedImage={selectedImage}></Modal> }

        </>
    );
}

export default SearchResult;