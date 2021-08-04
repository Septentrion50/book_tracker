import React from 'react';

const FavButton = () => {
    const setClass = () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => !card.classList.contains('fav') ? card.classList.toggle('d-none') : true);
    };

    return (
        <button className="btn btn-fav" onClick={setClass}>Toggle Favorites</button>
    )
};

export default FavButton;