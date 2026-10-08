import React from "react";

const Card = (props) => {

    console.log(props.user);
    
    return (
        <div>
            <div className="card">
                <img
                    src="https://4kwallpapers.com/images/walls/thumbs_3t/27362.jpg"
                    alt=""
                />
                <h1>Vinit Likahr</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>View profile</button>
            </div>
        </div>
    );
};

export default Card;
