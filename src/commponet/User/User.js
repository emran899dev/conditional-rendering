import React from 'react';

const User = (props) => {
    const familiar = props.familiar

    // Condictional way-1
    let greetings
    if(familiar){
        greetings =  <p>Welcome,my friend.</p>
    } else {
        greetings = <p>Who the hell are you?</p>
    }

    // Condictional way-2
    // javascripr ternary oparetor
    // const greetings = familiar ? <p>Welcome,my friend.</p> : <p>Who the hell are you?</p>

    // Condictional way-3
    // const num = 5
    // if(num > 7 && familiar === true){

    // }

    return (
       <div className="">
            <div>
            <h2>Geetings</h2> 
            { greetings }
        </div>
        <div>
            <h2>Food</h2>
            {
                familiar ?  <p>I Will Buy Food For You</p> : <p>Lets eat his his whose whose?</p>
            }
            
        </div>
        <div className="">
            <h1>Connection</h1>
            {
                familiar && <p>Let's join facebook</p>
            }
        </div>
       </div>
    );
};

export default User;