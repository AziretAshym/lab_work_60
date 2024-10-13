import ChatForm from '../../Components/ChatForm/ChatForm.tsx';
import ChatContainer from '../../Components/ChatContainer/ChatContainer.tsx';
import { useEffect, useState } from 'react';
import { IMessage } from '../../types';

const ChatApp = () => {

  const url = 'http://146.185.154.90:8000/messages';
  const [messages, setMessages] = useState<IMessage[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const messagesData = await response.json();
      if (messagesData.length > 0) setMessages(messagesData);

    } catch (e) {
      alert('Error ' + e);
    }
  };

  useEffect(() => {

    void fetchData();

  }, []);



  return (
    <div className="container mt-5">
      <div className="chat-app-container border rounded shadow p-3" style={{ backgroundColor: '#f1f3f5' }}>
        <ChatContainer messages={messages}/>
        <ChatForm />
      </div>
    </div>
  );
};

export default ChatApp;
