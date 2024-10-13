import ChatForm from '../../Components/ChatForm/ChatForm.tsx';
import ChatContainer from '../../Components/ChatContainer/ChatContainer.tsx';

const ChatApp = () => {

  return (
    <div className="container mt-5">
      <div className="chat-app-container border rounded shadow p-3" style={{ backgroundColor: '#f1f3f5' }}>
        <ChatContainer />
        <ChatForm />
      </div>
    </div>
  );
};

export default ChatApp;
