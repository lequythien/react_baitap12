import { useState } from "react";
import heart from "./img/heart.svg";

const AnimalShow = ({animal, className}) => {
    const [like, setLike] = useState(1);
    const handleLike = () =>{
        setLike(like + 1);
    };

    return (
        <div onClick={handleLike} className={className}>
            <figure className="image is-4by3">
                <img src={animal}/>
            </figure>
            <div className="like absolute">
                <img src={heart} 
                style={{width: 15 + 5 * like + "px", height: 15 + 5 * like + "px"}}
                alt="" />
            </div>
        </div>
    );
};
export default AnimalShow