import React, { useState, useContext } from 'react'; 
import ImagesContext from '../context/ImagesContext'
import FavoriteIcon from '@material-ui/icons/Favorite';


import Modal from './Modal'; 

import './SearchResult.css'


function SearchResult(props) {

    const [ showModal, setModalShow ] = useState(false)
    const { images, setSelectedImage, searchTerm } = useContext(ImagesContext)

    const handelImageClick = (imageId) => {
        setSelectedImage(imageId)
        setModalShow(true)
    }

    return (
        <>
        <div className="swiper-thumb">
            { (!!searchTerm && !images.length) ? 
                <div className="no-results">
                    <h2>No results found</h2>
                    <p>Please try with a different search term.</p>
                </div>
                :
                <div className="swiper-container" >
                        <div className="swiper-wrapper result">
                            {images.map((img)=> { 
                                return (
                                    <div className="slide" key={img.id} onClick={() => handelImageClick(img.id)}>
                                        <div className="image-wrapper">
                                            <img src={img.urls.thumb} className="image-thumb" alt={img.name}/>
                                            <span className="overlay">
                                                <div className="authorAvatar">
                                                    <img src={img.user.profile_image} alt={img.name}/>
                                                </div>
                                                <div className="titleAndAuthor">
                                                    <h3 className="title">
                                                        <p>{img.description}</p>
                                                    </h3>
                                                    <p className="authorName">
                                                        <span>{img.user.name}</span>
                                                    </p>
                                                    <span><FavoriteIcon></FavoriteIcon>{img.likes}</span>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
            }
        </div>
        { showModal && <Modal setModalShow={setModalShow} showModal={showModal}></Modal> }
        </>
    );
}

export default SearchResult;