import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './user.module.css'

function UserComponent() {


    const users = useSelector((state)=>state.UserReducer.users)
    const userDisplay = users.map((user)=>{
        const {id,name,username} = user

        return(
            <div key={id} className={styles.content}>
                <Link to={`/userinfo/${id}`}>
                    <div>
                    <hr></hr>
                    <ul className={styles.list}>
                        <li >Name: {name}</li>
                        <li>Username: {username}</li>
                        
                    </ul>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div>
            <h5>{userDisplay}</h5>
        </div>
    )
}

export default UserComponent
