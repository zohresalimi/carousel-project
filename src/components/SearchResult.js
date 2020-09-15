import React, { useState, useContext } from 'react'; 
import ImagesContext from '../context/ImagesContext'


import Modal from './Modal'; 

import './SearchResult.css'


function SearchResult(props) {

    const [ showModal, setModalShow ] = useState(false)
    const { images, setSelectedImage } = useContext(ImagesContext)

    const handelImageClick = (imageId) => {
        setSelectedImage(imageId)
        setModalShow(true)
    }

    return (
        <>
            <div className="swiper-thumb">
                <div className="swiper-container" >
                    <div className="swiper-wrapper result">
                        {images.map((img)=> { 
                            return (
                                <div className="slide" key={img.id} onClick={() => handelImageClick(img.id)}>
                                    <div className="image-wrapper">
                                        <img src={img.urls.thumb} className="image-thumb"/>
                                        <span className="overlay">
                                            <div className="authorAvatar">
                                                <img src={img.user.profile_image}/>
                                            </div>
                                            {/* <div className="titleAndAuthor">
                                                <h3 className="title">
                                                    <a href="">{img.description}</a>
                                                </h3>
                                                <p className="authorName">
                                                    <a href="">{img.user.name}</a>
                                                </p>
                                            </div> */}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
            </div>
            { showModal && <Modal setModalShow={setModalShow} showModal={showModal}></Modal> }

        </>
    );
}

export default SearchResult;