import { User } from "@/data/chat";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatSidebarProps {
  users: User[];
  selectedUser: User | null;
  onSelectUser: (user: User) => void;
}

export function ChatSidebar({
  users,
  selectedUser,
  onSelectUser,
}: ChatSidebarProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold">Chats</h1>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2">
          {users.map((user) => (
            <button
              key={user.id}
              onClick={() => onSelectUser(user)}
              className={cn(
                "flex w-full items-center gap-3 rounded-md p-3 text-left transition-colors hover:bg-muted",
                selectedUser?.id === user.id && "bg-muted"
              )}
            >
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {user.online && (
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-muted-foreground truncate">
                  {user.online ? "Online" : "Offline"}
                </p>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}