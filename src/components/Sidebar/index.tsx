import Link from "next/link";
import { Card } from "@/components/Card";

export default function Sidebar() {
  return (
    <div className="h-screen">
      <Card className="h-screen">
        <nav className="flex flex-col p-4 ml-20">
          <Link className="mb-4 p-2 rounded hover:bg-gray-700" href="/">
            Home
          </Link>
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
      </Card>
    </div>
  );
}
