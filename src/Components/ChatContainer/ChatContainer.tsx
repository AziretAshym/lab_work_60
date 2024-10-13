import OneMessage from '../OneMessage/OneMessage.tsx';
import { IMessage } from '../../types';

const ChatContainer = ({ messages }: { messages: IMessage[] }) => {
  return (
    <div className="chat-container p-3 border rounded overflow-auto mb-3"
         style={{height: '580px', backgroundColor: '#f8f9fa'}}>
      {messages.slice(-15).map((msg) => (
        <OneMessage key={msg._id} message={msg} />
      ))}
    </div>
  );
};

export default ChatContainer;
