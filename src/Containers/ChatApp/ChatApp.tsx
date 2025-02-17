import ChatForm from '../../Components/ChatForm/ChatForm.tsx';
import ChatContainer from '../../Components/ChatContainer/ChatContainer.tsx';
import { useEffect, useState } from 'react';
import { IMessage } from '../../types';

const ChatApp = () => {

  const url = 'http://146.185.154.90:8000/messages';
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loader, setLoader] = useState<boolean>(false)

  const fetchData = async () => {
    setLoader(true);
    try {
      const response = await fetch(url);
      const messagesData = await response.json();
      if (messagesData.length > 0) setMessages(messagesData);

    } catch (e) {
      alert('Error ' + e);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {

    void fetchData();

    const interval = setInterval(() => {
      void fetchData();
    }, 7000);

    return () => clearInterval(interval);

  }, []);


  const sendMessage = async (message: string, author: string) => {
    const data = new URLSearchParams();
    data.set('message', message);
    data.set('author', author);

    try {
      await fetch(url, {
        method: 'POST',
          body: data,
      });
      void fetchData();
    } catch (e) {
      alert('Error: ' + e);
    }
  }



  return (
    <div className="container mt-5">
      <div className="chat-app-container border rounded shadow p-3" style={{ backgroundColor: '#f1f3f5' }}>
        {loader && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {!loader && <ChatContainer messages={messages} />}
        <ChatForm onSendMessage={sendMessage}/>
      </div>
    </div>
  );
};

export default ChatApp;
