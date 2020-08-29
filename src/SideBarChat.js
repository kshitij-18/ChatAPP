import React, { useEffect, useState } from 'react'
import './SideBarChat.css'
import { Avatar } from '@material-ui/core'
import db from './firebase'
function SideBarChat({ newChat, id, name }) {


    const [seed, setSeed] = useState('123')

    useEffect(() => {
        // gets and sets a random value for the seed whcih fetches new pic as we visit new api endpoint everytime.
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () => {
        const roomName = prompt('Please enter name for chat')
        if (roomName) {
            // add and create a new chat
            db.collection('Rooms').add({
                name: roomName
            })
        }
    };

    return !newChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
            <div className='sidebarChat__chatinfo'>
                <h2>{name}</h2>
                <p>Last message ...</p>
            </div>
        </div>
    ) : (
            <div onClick={createChat} className='sidebarChat'>
                <h1>Add New Chat</h1>
            </div>
        )
}

export default SideBarChat
