import React from 'react'

const Message = ({message}) => {
    const color='red'
    return (
        <p style={{color: color}}>{message}</p>
        )
    }

export default Message
