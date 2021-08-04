import React from 'react';

const ReadButton = () => {
    const setClass = () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => !card.classList.contains('read' || 'fav') ? card.classList.toggle('d-none') : true);
    };

    return (
        <button className="btn btn-read" onClick={setClass}>Toggle Read</button>
    )
}

export default ReadButton;