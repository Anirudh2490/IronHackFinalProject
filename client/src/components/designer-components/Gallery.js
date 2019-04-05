import React from 'react';
import Gallery from 'react-grid-gallery';


const imgr = (props) => {
        const imagess = props.imagesList;
        const IMAGES =
        [
        ]
        imagess.map(function(img){
                return (
                        IMAGES.push({src: "http://localhost:3001/" + img, thumbnail: "http://localhost:3001/" + img, thumbnailWidth: 320, thumbnailHeight: 212 })
                )
        })
        return(
                <Gallery images={IMAGES} />
        
        )
}

export default imgr;