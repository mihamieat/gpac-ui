import NotificationCard from "@/components/NotificationCard";
import { notificationData } from "@/data/dummydata";

export default function Notifications() {
  return (
    <main>
      <div className="flex-col">
        <h1 className="p-8 font-mono fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:size-auto lg:bg-none">
          Notifications
        </h1>
        {notificationData.map((notification, index) => (
          <NotificationCard
            key={index}
            recipients={notification.recipients}
            machines={notification.machines}
            severity={notification.severity}
            message={notification.message}
            date={notification.date}
            id={notification.id}
          />
        ))}
      </div>
    </main>
  );
}
