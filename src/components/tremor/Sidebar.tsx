import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/tremor/Card";
import HomeIcon from "@/lib/icons/home";
import OverviewIcon from "@/lib/icons/overview";
import NotificationIcon from "@/lib/icons/notifications";
import SettingsIcon from "@/lib/icons/settings";

export default function Sidebar() {
  return (
    <div className="h-screen">
      <Card className="h-screen">
        <nav className="flex flex-col p-5 ml-20">
          <Link href="/">
            <Image
              src="/g-logo.png"
              alt="app logo"
              width={100}
              height={100}
              className="ml-10"
            />
          </Link>
          <Link className="mb-4 p-2 rounded hover:bg-violet-100" href="/">
            <div className="flex">
              <div className="w-5 mx-3">
                <HomeIcon />
              </div>
              Home
            </div>
          </Link>
          <Link
            className="mb-4 p-2 rounded hover:bg-violet-100"
            href="/overview"
          >
            <div className="flex">
              <div className="w-5 mx-3">
                <OverviewIcon />
              </div>
              <p>Overview</p>
            </div>
          </Link>
          <Link
            className="mb-4 p-2 rounded hover:bg-violet-100"
            href="/notifications"
          >
            <div className="flex">
              <div className="w-5 mx-3">
                <NotificationIcon />
              </div>
              <p>Notifications</p>
            </div>
          </Link>
          <Link
            className="mb-4 p-2 rounded hover:bg-violet-100"
            href="/settings"
          >
            <div className="flex">
              <div className="w-5 mx-3">
                <SettingsIcon />
              </div>
              <p>Settings</p>
            </div>
          </Link>
        </nav>
      </Card>
    </div>
  );
}
