import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Link href="/files/upload" className="px-4 py-2 bg-green-600 text-white rounded">
        Upload Files
      </Link>
      <Link href="/files/list" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded">
        View Files
      </Link>
    </div>
  );
}
