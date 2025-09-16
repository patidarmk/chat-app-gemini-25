import * as React from "react";
import {
  User,
  Message,
  messages as initialMessages,
  loggedInUserId,
} from "@/data/chat";
import { ChatMessageList } from "./ChatMessageList";
import { ChatMessageInput } from "./ChatMessageInput";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatProps {
  selectedUser: User;
}

export function Chat({ selectedUser }: ChatProps) {
  const [messages, setMessages] = React.useState<Message[]>(
    initialMessages[selectedUser.id] || []
  );

  React.useEffect(() => {
    setMessages(initialMessages[selectedUser.id] || []);
  }, [selectedUser]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      senderId: loggedInUserId,
      receiverId: selectedUser.id,
      content,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate a reply
    setTimeout(() => {
      const reply: Message = {
        id: `msg-${Date.now() + 1}`,
        senderId: selectedUser.id,
        receiverId: loggedInUserId,
        content: "Thanks for your message! I'll get back to you shortly.",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, reply]);
    }, 1500);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 border-b p-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
          <AvatarFallback>
            {selectedUser.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold">{selectedUser.name}</h2>
          <p className="text-sm text-muted-foreground">
            {selectedUser.online ? "Online" : "Offline"}
          </p>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <ChatMessageList messages={messages} selectedUser={selectedUser} />
      </div>
      <ChatMessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}