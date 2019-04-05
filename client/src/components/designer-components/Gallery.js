import React from 'react';
import Gallery from 'react-grid-gallery';


const imgr = (props) => {
        const imagess = props.imagesList;
        const IMAGES =
        [{
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: true,
                caption: "After Rain (Jeshu John - designerspics.com)"
        },
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