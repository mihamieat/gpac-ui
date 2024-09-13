import Link from "next/link";
import { Card } from "@/components/tremor/Card";
import { Divider } from "@/components/tremor/Divider";
import { ProgressBar } from "@/components/tremor/ProgressBar";
import TrashIcon from "@/lib/icons/trash";

interface NotificationCardProps {
  recipients: string[];
  machines: string[];
  severity: number;
  message: string;
  date: string;
  id: string;
}

const getVariant = (severity: number) => {
  if (severity <= 40) return "neutral";
  if (severity <= 60) return "warning";
  if (severity <= 80) return "error";
  return "default";
};

const NotificationCard: React.FC<NotificationCardProps> = ({
  recipients,
  machines,
  severity,
  message,
  date,
  id,
}) => {
  return (
    <Card className="mb-4">
      <div className="flex justify-between">
        <p>
          <b>Recipients: </b>
          {Array.isArray(recipients) ? recipients.join(", ") : recipients}
        </p>
        <div className="w-5">
          <Link href="api/delete/message/${id}">
            <TrashIcon />
          </Link>
        </div>
      </div>
      <p>
        <b>Machines: </b>
        {Array.isArray(machines) ? machines.join(", ") : machines}
      </p>
      <div className="flex items-center space-x-3">
        <b>Severity: </b>
        <ProgressBar
          variant={getVariant(severity)}
          value={severity}
          className="w-60"
        />
      </div>
      <p>
        <b>Date: </b>
        {date}
      </p>
      <Divider />
      <p>
        <b>Message: </b>
        {message}
      </p>
    </Card>
  );
};

export default NotificationCard;
