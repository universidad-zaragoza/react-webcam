import { createContext, useContext, useState, ReactNode } from "react";

interface MessageContextType {
  messages: string[];
  addMessage: (message: string) => void;
}

const MessageContext = createContext<MessageContextType>({
  messages: [],
  addMessage: () => {},
});

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = (message: string) => {
    const messageString = JSON.stringify(message);
    console.log("+++ Inside MessageProvider => " + messageString);
    setMessages((prevMessages) => [...prevMessages, messageString]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => {
  return useContext(MessageContext);
};
