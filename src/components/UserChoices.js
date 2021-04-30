import React from 'react';
import styled from 'styled-components'
import editIcon from '../Asset/Symbol 9 – 10.png'

const UserChoices = ({ choice }) => {
  
    return (
        <>
            <EditButton>
                <img src={editIcon} alt="Edit" />
            </EditButton>
            <p>{choice === "Yes" ? "Yes,I do" : "No,I don't"}</p>
        </>
    )
}

export default UserChoices

const EditButton = styled.button`
      background: none;
    border: none;
    position: absolute;
    bottom: 60%;
    right: 75%;
`
