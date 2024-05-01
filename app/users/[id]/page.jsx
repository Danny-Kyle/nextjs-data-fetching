import UserPosts from '@/app/components/UserPosts'
import getUser from '@/app/libs/getUser'
import getUserPosts from '@/app/libs/getUserPosts'
import { Suspense } from 'react'

export default async function UserPage({ params: {id} }) {
    //initiate both requests in parallel
    const userData = getUser(id)
    const userPosts = getUserPosts(id)

    const user = await userData
    //wait for both to complete
    // const [user, posts] = await Promise.all([userData, userPosts])
  return (
    <div>
        <h2 className='text-4xl font-bold'>User Information</h2>
        <p className='text-3xl my-5'>{user.name}</p>
        <Suspense fallback={<p className='text-center text-4xl'>Loading..........</p>}>
        <UserPosts promise={userPosts}/>
        </Suspense>
    </div>
  )
}
