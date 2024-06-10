import React, { useState, useEffect } from 'react';
import { getAdverts } from '../api/adverts.js';
import AdvertCard from './AdvertCard.js';

const Adverts = () => {
    const [adverts, setAdverts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchAdverts = async () => {
            try {
                const advertsData = await getAdverts();
                setAdverts(advertsData);
            } catch (error) {
                console.error('Error fetching adverts:', error);
            }
        };
        fetchAdverts();
    }, []);

    const loadMore = () => {
        setPage(page + 1);
    }

    const adverstToDisplay = adverts.slice(0, page * 4);

    return (
        <div>
            <h1>Catalog</h1>
            <div>
                {adverstToDisplay.map(advert => (
                    <AdvertCard key={advert._id} advert={advert}/>
                ))}
            </div>
            {adverstToDisplay.length < adverts.length && (
                <button onClick={loadMore}>Load More</button>
            )}
        </div>
    )
}

export default Adverts;