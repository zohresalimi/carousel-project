import React, { useState, useContext } from 'react';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import ImagesContext from '../context/ImagesContext'

import './modal.css'

const SelectedImage = () =>{
    const { images, selectedImage, setSelectedImage } = useContext(ImagesContext)
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
    const [transform, setTransform] = useState(0)

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
        console.log(nextImage)
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


    const transformSliderItems = (e) => {
        const newTransform = `translate(${transform + 150}px, 0px)`;
        setTransform(newTransform)
      }



      const elementInViewport = (el) => {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
      
        while(el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
        }
      
        return (
          top >= window.pageYOffset &&
          left >= window.pageXOffset &&
          (top + height) <= (window.pageYOffset + window.innerHeight) &&
          (left + width) <= (window.pageXOffset + window.innerWidth)
        );
      }

    return (

        <div className={`modal ${props.showModal ? "show" : ""}`}>
            <label className="modal__bg"></label>
            <div className="modal__inner">
                <label className="modal__close" onClick={closeModal}></label>
                <SelectedImage ></SelectedImage>
                <div className="swiper-thumb">
                    <div className="swiper-container" >
                        <div className="swiper-wrapper">
                            {images.map((img)=> { 
                                return (
                                    <div className="slide" key={img.id} onClick={() => selectImage(img.id)}>
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
                    <div className="swiper-next-button" onClick={handelNextButton} style={{transform: transformSliderItems}}>
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


