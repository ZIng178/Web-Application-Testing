import React from 'react';

const Dashboard =(props)=>{
    console.log(props)
    
    return (
        <div>
            <button onClick={()=>{props.addStrikes()}}> Strike </button>
            <button onClick={()=>{props.addBalls()}}> Ball </button>
            <button onClick={()=>{props.addHit()}}> Hit </button>
            <button onClick={()=>{props.addFoul()}}> Foul</button>
        </div>
    )
}

export function add(num1,num2){
    return num1+num2;
}

export default Dashboard;