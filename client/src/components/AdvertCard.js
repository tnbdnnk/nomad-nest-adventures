import React, { useState } from 'react';

const AdvertCard = ({ advert }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div>
            <img src={advert.gallery[0]} alt={advert.name} />
            <h2>{advert.name}</h2>
            <p>Price: {advert.price.toFixed(2)}</p>
            <button
                onClick={toggleFavorite}
            >
                Add to favorites
            </button>
            <button>Show more</button>
        </div>
    )
}

export default AdvertCard;