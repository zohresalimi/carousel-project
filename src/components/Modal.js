import React, { useEffect, useContext, useRef } from 'react';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import ImagesContext from '../context/ImagesContext'

import './modal.css'

const SelectedImage = () =>{
    const { images, selectedImage, setSelectedImage } = useContext(ImagesContext)
    console.log(images)
    const img = images.find((image) => image.id === selectedImage)
    console.log(img)
    return(
        <div className="carousel-inner">
            <div className="item">
                <img src={img.urls.regular}/>
            </div>
        </div>
    )
}



function Modal(props) {
    const { images, selectedImage, setSelectedImage } = useContext(ImagesContext)
    const currentElement = useRef(null)
    const swiperWrapper = useRef(null)
    const swiperContainer = useRef(null)

    useEffect(() => {
        goToElement()
    }, [selectedImage])

    const closeModal= () => {
        props.setModalShow(false)
      }

    const selectImage = (imageId) => {
        setSelectedImage(imageId)
    }

    const handelNextButton = () =>{
        const currImageIndex = images.findIndex((image) => image.id === selectedImage);
        if(currImageIndex == images.length-1){
            setSelectedImage(images[0].id)
            return
        }
        const nextImage = images[currImageIndex+1].id;
        setSelectedImage(nextImage)
    }

    const handelPrevButton = () =>{
        const currImageIndex = images.findIndex((image) => image.id === selectedImage);
        if(currImageIndex === 0){
            setSelectedImage(images[images.length-1].id)
            return
        }
        const nextImage = images[currImageIndex-1].id;
        setSelectedImage(nextImage)
    }
      
    function goToElement() {
        const parentElement = swiperContainer.current
        parentElement.scrollTo({top: 0, left: currentElement.current.offsetLeft, behavior: 'smooth'})
    }

    return (

        <div className={`modal ${props.showModal ? "show" : ""}`}>
            <label className="modal__bg"></label>
            <div className="modal__inner">
                <label className="modal__close" onClick={closeModal}></label>
                <SelectedImage ></SelectedImage>
                <div className="swiper-thumb">
                    <div className="swiper-container" ref={swiperContainer}>
                        <div className="swiper-wrapper" ref={swiperWrapper}>
                            {images.map((img)=> { 
                                return (
                                    <div className={`slide ${selectedImage === img.id ?"img-filter":""}`} key={img.id} onClick={() => selectImage(img.id)} ref={selectedImage === img.id ?currentElement: null}>
                                        <div className="image-wrapper">
                                            <img src={img.urls.thumb} className="image-thumb"/>
                                            <span className="overlay">
                                                <div className="authorAvatar">
                                                    <img src={img.user.profile_image}/>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="swiper-next-button" onClick={handelNextButton}>
                            <em className="material-icons"><ArrowRightAlt></ArrowRightAlt></em>
                    </div>
                    <div className="swiper-prev-button" onClick={handelPrevButton}>
                            <em className="material-icons"><ArrowRightAlt></ArrowRightAlt></em>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;


