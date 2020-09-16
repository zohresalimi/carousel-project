import React, { useState, useContext, useRef } from 'react';
import fetchPhotos from "../services/photo-service";
import SearchIcon from '@material-ui/icons/Search';
import ImagesContext from '../context/ImagesContext'

import './SearchBox.css';

function SearchBox(props) {
    const { setImages, setSearchTerm} = useContext(ImagesContext)
    const [isLoading, setIsLoading] = useState(false)
    const inputElement = useRef(null)
    
    
    const searchPhotos = async () => {
        setIsLoading(true)
        const searchResult = await fetchPhotos(inputElement.current.value)
        setSearchTerm(inputElement.current.value)
        setIsLoading(false)
        mapImages(searchResult.results)
    }

    const mapImages = (imageList) => {
        const imageListObj= imageList.map((image) => {
            return {
                id: image.id,
                likes: image.likes,
                description: image.description,
                user:{
                    name: image.user.name,
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
            {isLoading && <div className="loader dl-loader"></div>}
            <button onClick={searchPhotos} className="search-btn"><SearchIcon></SearchIcon></button>
        </div>
    );
}

export default SearchBox;