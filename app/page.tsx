import Link from 'next/link';

export default function Home() {
  return (
    <main className="py-4 px-48">
      <Link className="bg-teal-700 text-black font-medium py-4 px-6 rounded-md" href="/dashboard">Go to the dashboard</Link>
    </main>
  )
}
