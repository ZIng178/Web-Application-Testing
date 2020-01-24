import React from "react";

const Display =({Strike,Ball })=>{
    return(
        <div>
            <div>
                <h2> Strikes</h2>
                <h3>{Strike}</h3>
                </div>
                <div>
                <h2> Balls</h2>
                <h3>{Ball}</h3>
            </div>
        </div>
    )
}

export default Display;