export type User = {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
};

export type Message = {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
};

export const users: User[] = [
  {
    id: "1",
    name: "Alice Johnson",
    avatar: "https://i.pravatar.cc/150?u=alice",
    online: true,
  },
  {
    id: "2",
    name: "Bob Williams",
    avatar: "https://i.pravatar.cc/150?u=bob",
    online: false,
  },
  {
    id: "3",
    name: "Charlie Brown",
    avatar: "https://i.pravatar.cc/150?u=charlie",
    online: true,
  },
  {
    id: "4",
    name: "Diana Miller",
    avatar: "https://i.pravatar.cc/150?u=diana",
    online: true,
  },
  {
    id: "5",
    name: "Ethan Davis",
    avatar: "https://i.pravatar.cc/150?u=ethan",
    online: false,
  },
  {
    id: "6",
    name: "Fiona Garcia",
    avatar: "https://i.pravatar.cc/150?u=fiona",
    online: true,
  },
];

export const messages: Record<string, Message[]> = {
  "1": [
    {
      id: "msg1",
      senderId: "user",
      receiverId: "1",
      content: "Hey Alice, how's it going?",
      timestamp: "2024-07-30T10:00:00Z",
    },
    {
      id: "msg2",
      senderId: "1",
      receiverId: "user",
      content: "Hey! I'm doing great, thanks for asking. Just working on the new project design. How about you?",
      timestamp: "2024-07-30T10:01:00Z",
    },
    {
      id: "msg3",
      senderId: "user",
      receiverId: "1",
      content: "Same here. It's coming along nicely. Did you see the latest mockups?",
      timestamp: "2024-07-30T10:02:00Z",
    },
  ],
  "2": [
    {
      id: "msg4",
      senderId: "user",
      receiverId: "2",
      content: "Hi Bob, do you have a moment to review the Q3 report?",
      timestamp: "2024-07-29T14:30:00Z",
    },
    {
      id: "msg5",
      senderId: "2",
      receiverId: "user",
      content: "Sure, I can take a look this afternoon. I'll get back to you with feedback by EOD.",
      timestamp: "2024-07-29T14:32:00Z",
    },
  ],
  "3": [
    {
      id: "msg6",
      senderId: "3",
      receiverId: "user",
      content: "Good grief! The kite is stuck in the tree again.",
      timestamp: "2024-07-30T11:00:00Z",
    },
  ],
  "4": [
    {
      id: "msg7",
      senderId: "user",
      receiverId: "4",
      content: "Lunch at 12:30?",
      timestamp: "2024-07-30T11:15:00Z",
    },
    {
      id: "msg8",
      senderId: "4",
      receiverId: "user",
      content: "Sounds perfect! See you then.",
      timestamp: "2024-07-30T11:16:00Z",
    },
  ],
  "5": [],
  "6": [
    {
      id: "msg9",
      senderId: "6",
      receiverId: "user",
      content: "Can you send me the files for the presentation?",
      timestamp: "2024-07-28T09:00:00Z",
    },
  ],
};

export const loggedInUserId = "user";