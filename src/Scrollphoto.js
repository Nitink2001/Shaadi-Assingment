import React, { useState } from 'react'
import App from './App';
import './Scrollphoto.css';


function Scrollphoto() {

    const [photos, setPhotos] = 
        useState([
            {   
                id:1,
                profilepic: "https://i.pinimg.com/280x280_RS/6d/f0/68/6df068293be82fe954c85897c67d0d21.jpg"
            },
            {   
                id:2,
                profilepic: "https://i.pinimg.com/280x280_RS/6d/f0/68/6df068293be82fe954c85897c67d0d21.jpg"
            },
            {   
                id:3,
                profilepic: "https://i.pinimg.com/280x280_RS/6d/f0/68/6df068293be82fe954c85897c67d0d21.jpg"
            },
            {   
                id:4,
                profilepic: "https://i.pinimg.com/280x280_RS/6d/f0/68/6df068293be82fe954c85897c67d0d21.jpg"
            },
            {   
                id:5,
                profilepic: "https://i.pinimg.com/280x280_RS/6d/f0/68/6df068293be82fe954c85897c67d0d21.jpg"
            },
            {   
                id:6,
                profilepic: "https://i.pinimg.com/280x280_RS/6d/f0/68/6df068293be82fe954c85897c67d0d21.jpg"
            },
        ]);
    
    
    
    return (
        <div className="row">
            <div className="row-posters">
                {photos.map(photo => (
                    <img
                        key={photo.id}
                        className="row__photos"
                        src={photos.profilepic} alt="No photos" />
                ))}
            </div>
        </div>
    )
}

export default Scrollphoto;