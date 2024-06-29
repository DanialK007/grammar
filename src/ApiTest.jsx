import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApiTest() {
    const [gallery, setGallery] = useState([]);
    const ACCESS_KEY = 'cGP7ThWxoCzePGEVzPgVsfbH0bCd_bjdFHzylPVnQDQ'; // Replace with your actual Unsplash Access Key

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=28`);
                console.log(response);
                setGallery(response.data);
            } catch (error) {
                console.log("Error fetching photos", error);
            }
        };

        fetchPhotos();
    }, [ACCESS_KEY]);

    return (
        <div className="">
            <div className="grid lg:grid-cols-4">
                {gallery.map((img, index) => (
                    <div key={index} className=" bg-slate-300 group overflow-hidden">
                        {/* <div className="text-2xl font-semibold line-clamp-1">{img.description || img.alt_description || 'Photo'}</div> */}
                        <img src={img.urls.small} alt={img.description || img.alt_description} className='group-hover:scale-105 duration-500 h-[300px] w-full object-cover'/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ApiTest;
