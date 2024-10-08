import React from 'react'
import {User} from '@/app/types/User'

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users:User[]=await res.json()
  return (
   <>
   <h1>Users</h1>
   <ul>
    {users.map(user => <li key={user.id}>{user.name}</li>)}
   </ul>
   </>
  )
}

export default UsersPage