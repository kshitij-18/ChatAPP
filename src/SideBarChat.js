import React, { useEffect, useState } from 'react'
import './SideBarChat.css'
import { Avatar, IconButton } from '@material-ui/core'
import db from './firebase'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';

function SideBarChat({ newChat, id, name }) {


    const [seed, setSeed] = useState('123')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        // gets and sets a random value for the seed whcih fetches new pic as we visit new api endpoint everytime.
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    useEffect(() => {
        if (id) {
            db.collection('Rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').
                onSnapshot(snapshot => setMessages(
                    snapshot.docs.map((doc) => doc.data())
                ))
        }

    }, [id])

    const createChat = () => {
        const roomName = prompt('Please enter name for chat')
        if (roomName) {
            // add and create a new chat
            db.collection('Rooms').add({
                name: roomName
            })
        }
    };

    const deleteChat = (event) => {
        const response = prompt('Are you sure you want to delete the chat?')

        if (response) {
            // deletes the record
            console.log(id)
            db.collection('Rooms').doc(id).delete().then(
                function () {
                    console.log('Chat successfully deleted')
                }
            ).catch(function (error) {
                console.error("Error in removing the document", error)
            })
        }
    }

    return !newChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
                <div className='sidebarChat__chatinfo'>

                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>

                </div>
                <div className='sidebarChat__delete'>
                    <IconButton onClick={deleteChat}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        </Link>

    ) : (
            <div onClick={createChat} className='sidebarChat'>
                <h1>Add New Chat</h1>
            </div>
        )
}

export default SideBarChat
