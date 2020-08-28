import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons'
function Chat() {

    const [seed, setSeed] = useState('123')

    useEffect(() => {
        // gets and sets a random value for the seed whcih fetches new pic as we visit new api endpoint everytime.
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    return (
        <div className='chat'>
            {/* header of the chatbox containing title images etc. */}
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
                <div className='chat__headerinfo'>
                    <h3>Room Name</h3>
                    <p>Last seen at..</p>
                </div>

                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            {/* Body of the chatbox where the messages are seen */}
            <div className='chat__body'>

            </div>

            {/* input field of the chatbox */}
            <div className='chat__footer'>

            </div>
        </div>
    )
}

export default Chat
