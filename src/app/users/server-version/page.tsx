import { User } from '@/types'
import React from 'react'
import Link from 'next/link'

// server version
// by default - server component
const UserServerVersion = async () => {
    // "Умное" кеширование: force-cache и revalidate (3600 секунд = 1 час)
    const res = await fetch('https://api.escuelajs.co/api/v1/users', {
        headers: {'API-Key': '1234567890'},
        cache: 'force-cache', // использовать кэш, если есть
        next: {
            revalidate: 3600, // обновлять кэш раз в час
        }
    })
    if(!res.ok){
        throw new Error('Failed to fetch users')
    }
    const users = await res.json()
  return (
    <div>
    {users.map((user: User) => (
      <li key={user.id}>
        {user.name}
        <Link href={`/users/server-version/${user.id}`}>To user</Link>
      </li>
    ))}
  </div>
  )
}

export default UserServerVersion 