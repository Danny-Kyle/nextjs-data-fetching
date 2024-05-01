import getUsers from "../libs/getUsers"
import Link from "next/link"

export default async function page() {
    const users = await getUsers()
  return (
    <div className='text-center my-10'>
        <h1 className='text-4xl font-semibold'>Users</h1>
        {users.map((user) => {
            return(
                <>
                <p key={user.id} className="text-2xl my-5">
                    <Link href={`/users/${user.id}`}>
                    {user.name}
                    </Link>
                    </p>
                </>
            )
        })}
    </div>
  )
}
