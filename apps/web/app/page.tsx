import React from 'react'
import { client } from '@repo/db/client'

const Home = async () => {
  const user = await client.user.findFirst();
  return <div>
    <h2>Username : </h2>{user?.username}
    <br />
    <h3>Password : </h3>{user?.password}
  </div>
}

export default Home