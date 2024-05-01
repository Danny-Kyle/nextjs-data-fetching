import Link from "next/link"

export default async function Home() {
  return (
    <div className="text-center my-10">
      <h1 className="text-4xl font-semibold">Home</h1>
      <Link href='/users'>Go to Users</Link>
    </div>
  );
}
