import React from "react";

const Character = (props) => {

    console.log(props)

    return (
        <div>
            <img src={props.character.image} alt={props.character.name} />
            <h2>{props.character.name} is {props.character.gender} they are a/an {props.character.species} they are currently {props.character.status} </h2>
        </div>
        
    );

}

export default Character 