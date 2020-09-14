import React, { useContext, useRef } from 'react';
import fetchPhotos from "../services/photo-service";
import SearchIcon from '@material-ui/icons/Search';
import ImagesContext from '../context/ImagesContext'

import './SearchBox.css';

function SearchBox(props) {
    const { setImages } = useContext(ImagesContext)
    const inputElement = useRef(null)
    
    const searchPhotos = async () => {
        const searchResult = await fetchPhotos(inputElement.current.value)
        mapImages(searchResult.results)
    }

    const mapImages = (imageList) => {
        const imageListObj= imageList.map((image) => {
            console.log(image)
            return {
                id: image.id,
                likes: image.likes,
                description: image.description,
                user:{
                    name: image.user.name,
                    link: image.user.links.html,
                    profile_image: image.user.profile_image.small
                },
                urls:{
                    regular: image.urls.regular,
                    thumb: image.urls.thumb
                },
                link: image.links.download
            }
        })

        setImages(imageListObj)
    }

    const handelKeyUp = (event) => {
        if(event.key === 'Enter') {
            searchPhotos()
        }
    }

    return (
        <div className="input-wrapper">
            <input id="realbox" type="search" placeholder="Search" onKeyUp={handelKeyUp} ref={inputElement}></input>
            <button onClick={searchPhotos} className="search-btn"><SearchIcon></SearchIcon></button>
        </div>
    );
}

export default SearchBox;