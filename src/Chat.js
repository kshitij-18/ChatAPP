import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase'
function Chat() {

    const [seed, setSeed] = useState('123')
    const [input, setInput] = useState('')
    const { roomId } = useParams();  // to get the id from the url
    const [roomName, setroomName] = useState("")
    const [messages, setMessages] = useState([])
    const [{ user }, dispatch] = useStateValue()

    useEffect(() => {
        // everytime the roomId changes pull in the messages of that chat
        if (roomId) {
            db.collection('Rooms').doc(roomId).onSnapshot(snapshot => (

                snapshot.data() && setroomName(snapshot.data().name)
            ))
            db.collection('Rooms').doc(roomId).collection('messages')
                .orderBy('timestamp', 'asc').onSnapshot(snapshot => (
                    setMessages(snapshot.docs.map(doc => (
                        doc.data()
                    )))
                ))
        }
    }, [roomId])

    useEffect(() => {
        // gets and sets a random value for the seed whcih fetches new pic as we visit new api endpoint everytime.
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId])

    // Function to send message when Enter key is clicked
    const sendMessage = (e) => {
        e.preventDefault()
        console.log('You typed ->', input)
        setInput('')
        db.collection('Rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        })
    };

    return (
        <div className='chat'>
            {/* header of the chatbox containing title images etc. */}
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
                <div className='chat__headerinfo'>

                    <h3>{roomName}</h3>
                    {/* <p>{new Date(messages[messages.length - 1]?.timestamp?.toDate().toUTCString())}</p> */}
                </div>

                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined className='chat__icons'></SearchOutlined>
                    </IconButton>
                    <IconButton>
                        <AttachFile className='chat__icons'></AttachFile>
                    </IconButton>
                    <IconButton>
                        <MoreVert className='chat__icons'></MoreVert>
                    </IconButton>
                </div>
            </div>

            {/* Body of the chatbox where the messages are seen */}
            <div className='chat__body'>
                {messages.map((message) => (
                    <p className={`chat__message ${message.name === user.displayName && "chat__receiver"}`}>
                        <span className='chat__name'>{message.name}</span>
                        {message.message}
                        <span className='chat__timestamp'>
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>

                ))}

            </div>

            {/* input field of the chatbox */}
            <div className='chat__footer'>
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type='text' placeholder='Type a Message'></input>
                    <button onClick={sendMessage} type='submit'>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
