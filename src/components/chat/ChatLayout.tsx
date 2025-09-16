import * as React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { users } from "@/data/chat";
import { ChatSidebar } from "./ChatSidebar";
import { Chat } from "./Chat";
import { cn } from "@/lib/utils";

export function ChatLayout() {
  const [selectedUser, setSelectedUser] = React.useState(users[0]);
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-screen w-full items-stretch"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes
        )}`;
      }}
    >
      <ResizablePanel
        defaultSize={25}
        minSize={20}
        maxSize={30}
        collapsible
        collapsedSize={0}
        onCollapse={() => setIsCollapsed(true)}
        onExpand={() => setIsCollapsed(false)}
        className={cn(
          "transition-all duration-300 ease-in-out",
          isCollapsed && "min-w-[50px]"
        )}
      >
        <ChatSidebar
          users={users}
          selectedUser={selectedUser}
          onSelectUser={setSelectedUser}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        {selectedUser ? (
          <Chat selectedUser={selectedUser} />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted">
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}