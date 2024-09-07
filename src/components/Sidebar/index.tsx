import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <nav className="flex flex-col p-4">
        <Link className="mb-4 p-2 rounded hover:bg-gray-700" href="/overview">
          Overview
        </Link>
        <Link
          className="mb-4 p-2 rounded hover:bg-gray-700"
          href="/notifications"
        >
          Notifications
        </Link>
        <Link className="mb-4 p-2 rounded hover:bg-gray-700" href="/settings">
          Settings
        </Link>
      </nav>
    </div>
  );
}
