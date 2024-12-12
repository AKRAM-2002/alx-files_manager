import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to Files Manager</h1>
      <div className="mt-6 space-x-4">
        <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded">
          Login
        </Link>
        <Link href="/dashboard" className="px-4 py-2 bg-green-600 text-white rounded">
          Dashboard
        </Link>
      </div>
    </div>
  );
}