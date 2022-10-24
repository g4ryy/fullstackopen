import React from 'react'

export default function Notification({message}) {
    if (message === null) {
        return null;
    } else if (message[1] === false) {
        return (
            <div className='notif'>
                {message[0]}
            </div>
        )
    } else {
        return (
            <div className='error'>
                {message[0]}
            </div>
        )
    }
}
