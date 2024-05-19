"use client"

import React, { useState } from 'react';

const FavoriteButton = ({anime_mal_id, user_email}) => {
    const [isCreated, setIsCreated] = useState(false)

    const handleFavorite = async (event) => {
        event.preventDefault()

        const data = { anime_mal_id, user_email }
        const response = await fetch("/api/v1/favorite", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const favorite = await response.json()
        if(favorite.status == 200) {
            setIsCreated(true)
        }
        return
    }

    return (
        <>
            {isCreated ? alert("Anime berhasil di tambahkan") :
            <button className="px-2 py-1 bg-color-accent" onClick={handleFavorite}>Add To Favorite</button>
            }
        </>
    );
}

export default FavoriteButton;
