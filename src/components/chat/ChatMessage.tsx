import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/data/chat";

interface ChatMessageProps {
  message: {
    content: string;
    timestamp: string;
  };
  sender: User | { name: string; avatar: string };
  isSender: boolean;
}

export function ChatMessage({ message, sender, isSender }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3",
        isSender ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Avatar className="h-8 w-8">
        <AvatarImage src={sender.avatar} alt={sender.name} />
        <AvatarFallback>
          {sender.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "max-w-xs rounded-lg p-3 text-sm",
          isSender
            ? "bg-primary text-primary-foreground"
            : "bg-muted"
        )}
      >
        <p>{message.content}</p>
      </div>
    </div>
  );
}