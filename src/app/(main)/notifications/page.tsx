import NotificationCard from "@/components/NotificationCard";

const notificationData = [
  {
    recipients: ["some@recipients.com", "some111@recipients.com"],
    machines: ["machine1", "machine3"],
    severity: 80,
    message:
      "We have detected that your system's GPU usage has reached critical levels, consistently operating at or above 90% capacity. This high level of usage may lead to significant performance degradation, overheating, and potential hardware damage if not addressed promptly.",
    date: "Sept 13, 2024",
    id: "66c0f686490dc322ba29b7c5",
  },
  {
    recipients: ["some@recipients.com", "some111@recipients.com"],
    machines: ["machine1", "machine3"],
    severity: 50,
    message:
      "We have detected that your system's GPU usage has reached critical levels, consistently operating at or above 90% capacity. This high level of usage may lead to significant performance degradation, overheating, and potential hardware damage if not addressed promptly.",
    date: "Sept 13, 2024",
    id: "66c0f686490dc322ba29b7c5",
  },
  {
    recipients: ["some@recipients.com", "some111@recipients.com"],
    machines: ["machine1", "machine3"],
    severity: 20,
    message:
      "We have detected that your system's GPU usage has reached critical levels, consistently operating at or above 90% capacity. This high level of usage may lead to significant performance degradation, overheating, and potential hardware damage if not addressed promptly.",
    date: "Sept 13, 2024",
    id: "66c0f686490dc322ba29b7c5",
  },
  {
    recipients: ["some@recipients.com", "some111@recipients.com"],
    machines: ["machine1", "machine3"],
    severity: 80,
    message:
      "We have detected that your system's GPU usage has reached critical levels, consistently operating at or above 90% capacity. This high level of usage may lead to significant performance degradation, overheating, and potential hardware damage if not addressed promptly.",
    date: "Sept 13, 2024",
    id: "66c0f686490dc322ba29b7c5",
  },
];

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
