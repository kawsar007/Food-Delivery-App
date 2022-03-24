import { AddRounded, Favorite, StarRounded } from '@mui/icons-material';
import React, { useState } from 'react';

const ItemCard = ({imgSrc, name, rating, itemId, price}) => {
    const [ isFavourite, setFavourite ] = useState(false);
    const [ currentValue, setCurrentValue ] = useState(Math.floor(rating));

    const handleClick = (value) => {
         setCurrentValue(value)
    };

    return (
        <div className="itemCard" id={itemId}>
            <div className={`isfavourite ${isFavourite ? "active" : ""}`}
              onClick={() => setFavourite(!isFavourite)}
            >
                <Favorite/>
            </div>

            <div className="imgBox">
                <img src={imgSrc} alt="" className="itemImg"/>
            </div>
            <div className="itemContent">
                <h3 className="itemName">{name}</h3>
                <div className="bottom">
                    <div className="ratings">
                        {Array.apply(null, {length: 5}).map((e,i) =>(
                            <i key={i} className={`rating ${currentValue > i ? "orange" : "gray"}`}
                              onClick={() => handleClick(i + 1)}
                            >
                                <StarRounded/>
                            </i>
                        ))}
                        <h3 className="price"><span>$ </span>{price}</h3>
                    </div>
                    <i className="addtoCart">
                        <AddRounded />
                    </i>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;
