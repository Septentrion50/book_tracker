import React from 'react'

const Button = ({ newClass, btnText, property }) => {
    const [clicked, setClicked] = React.useState(false);

    const changeStatus = (e) => {
        setClicked(!clicked);
        e.target.parentNode.parentNode.classList.toggle(newClass);
        if (newClass === 'fav'){
            property.isFav = clicked;
            console.log(property.isFav)
        } else {
            property.read = clicked;
            console.log(property.read)
        }

    }

    return (
        <button className={`btn btn-${newClass}`} onClick={e => changeStatus(e)}>{btnText}</button>
    )
}

export default Button;