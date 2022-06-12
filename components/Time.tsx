import { format } from "date-fns";

export default function Time({ dateTime }: { dateTime: string }) {
  return (
    <time className="text-xs text-gray-300" dateTime={dateTime} title={dateTime}>
      {format(new Date(dateTime), "yyyy-MM-dd HH:MM:SS")}
    </time>
  );
}
