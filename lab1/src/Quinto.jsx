import React, { useState, useEffect } from 'react'

export const Quinto = () => {

    const [iframeSrc, setIframeSrc] = useState(null);

    const promesa = new Promise( (resolve, reject)  => {
        setTimeout(() => {
            console.log("dentro de la promesa")
        }, 3000)
    });

    const apiKey = ""
    const gifId = ""

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/${gifId}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.data && data.data.images) {
                    setIframeSrc(data.data.images.original.url);  
                } else {
                    console.error("No GIF found in response.");
                }
            })
    }, [])
    
        return (
            <>
                <div>Quinto</div>
                {iframeSrc ? (
                <iframe
                    title="Iframe Example"
                    src={iframeSrc}
                    width="600"
                    height="400"
                    allowFullScreen
                ></iframe>
            ) : (
                <p>Loading...</p>  
            )}
            </>
        );
        
}
