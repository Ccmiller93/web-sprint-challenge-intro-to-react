import React from "react";
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
    100% {
    opacity: 1;
}
`
const StyledFriend = styled.div`
    animation: ${kf} 0.5s ease-in-out forwards;
    color: ${pr => pr.danger ? pr.theme.dangerColor : pr.theme.primaryColor};
    font-weight: bold;
    width: 100%;
    /* display: flex;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    align-content: center; */
    &:hover {
        color: ${pr => pr.theme.secondaryColor};
        transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
`
const StyledP = styled.p`
    animation: ${kf} 0.5s ease-in-out forwards;
    color: blueviolet;
    font-weight: bold;
    margin: 2% 0% 2% 0%;
    &:hover {
        color: ${pr => pr.theme.secondaryColor};
        transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
`
const StyledImg = styled.img`
    border-radius: 12%;
    margin: 2% 0%;
    &:hover{
        box-shadow: 5px 5px 37px 28px rgba(0,0,0,0.75);
        transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
`
const StyledH2 = styled.h2`
    padding: 2% 0% 2% 0%;
`

const Character = (props) => {

    console.log(props)

    return (
        <StyledFriend>
            <StyledH2>{props.character.name}</StyledH2>
            <StyledImg src={props.character.image} alt={props.character.name} />
            <StyledP> They are {props.character.gender} they are a/an {props.character.species} they are currently {props.character.status} </StyledP>
        </StyledFriend>
        
    );

}

export default Character 