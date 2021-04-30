import React from 'react';
import { useChatContext } from '../context/ChatContext'

import styled from 'styled-components'
import editIcon from '../Asset/Symbol 9 – 10.png'

const UserChoices = ({ choice }) => {
    const { setShowModal } = useChatContext();
    return (
        <>
            {/* Show text depends on user choice */}
            <EditButton onClick={()=>setShowModal(true)}>
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

