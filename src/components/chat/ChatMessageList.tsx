import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "./ChatMessage";
import { User, Message, loggedInUserId } from "@/data/chat";

interface ChatMessageListProps {
  messages: Message[];
  selectedUser: User;
}

export function ChatMessageList({ messages, selectedUser }: ChatMessageListProps) {
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const loggedInUser = {
    name: "You",
    avatar: "https://i.pravatar.cc/150?u=user",
  };

  return (
    <ScrollArea className="h-full" ref={scrollAreaRef}>
      <div className="p-4 space-y-4">
        {messages.map((msg) => {
          const isSender = msg.senderId === loggedInUserId;
          const sender = isSender ? loggedInUser : selectedUser;
          return (
            <ChatMessage
              key={msg.id}
              message={msg}
              sender={sender}
              isSender={isSender}
            />
          );
        })}
      </div>
    </ScrollArea>
  );
}