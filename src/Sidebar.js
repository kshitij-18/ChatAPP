import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLargeOutlined'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { SearchOutlined } from '@material-ui/icons'
import SideBarChat from './SideBarChat'
import db from './firebase'

function Sidebar() {
    const [rooms, setRooms] = useState([])

    // hook which gets fired off when the component loads, gets data from the database
    useEffect(() => {
        db.collection('Rooms').onSnapshot(snapshot => (setRooms(snapshot.docs.map(doc => (
            {
                id: doc.id,
                data: doc.data()
            }
        )))))
    }, [])

    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar />
                <div className='sidebar__headerIconsR'>
                    <IconButton>
                        <DonutLargeIcon className='sidebar__icons'></DonutLargeIcon>

                    </IconButton>
                    <IconButton>
                        <ChatIcon className='sidebar__icons'></ChatIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon className='sidebar__icons'></MoreVertIcon>
                    </IconButton>


                </div>
            </div>

            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlined></SearchOutlined>
                    <input placeholder='Search or start a new Chat' type='text'></input>
                </div>

            </div>

            <div className='sidebar__chats'>
                <SideBarChat newChat></SideBarChat>
                {rooms.map(room => (
                    <SideBarChat name={room.data.name} id={room.id} key={room.id} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
