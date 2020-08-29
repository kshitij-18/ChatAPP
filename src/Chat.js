import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic';
function Chat() {

    const [seed, setSeed] = useState('123')
    const [input, setInput] = useState('')

    useEffect(() => {
        // gets and sets a random value for the seed whcih fetches new pic as we visit new api endpoint everytime.
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    // Function to send message when Enter key is clicked
    const sendMessage = (e) => {
        e.preventDefault()
        console.log('You typed ->', input)
        setInput('')
    };

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
                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className='chat__name'>Kshitij Nath</span>
                    Hey Guys
                    <span className='chat__timestamp'>3:52pm</span>
                </p>
                <p className='chat__message'>
                    <span className='chat__name'>Kshitij Nath</span>
                    Hey Guys
                </p>
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
