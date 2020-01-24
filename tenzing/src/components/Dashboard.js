import React from 'react';

const Dashboard =(props)=>{
    console.log(props)
    
    return (
        <div>
            <button onClick={()=>{props.addStrikes()}}> Strike </button>
            <button onClick={()=>{props.addBalls()}}> Ball </button>
        </div>
    )
}

export default Dashboard;