import * as React from 'react';
import { useState } from 'react';


interface Props {
  onSendMessage: (message: string, author: string) => void;
}
const ChatForm: React.FC<Props> = ({onSendMessage}) => {
  const [newMessage, setNewMessage] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim().length > 0 && author.trim().length > 0) {
      onSendMessage(newMessage, author);
      setNewMessage('');
      setAuthor('');
    }
  };


  return (
    <form onSubmit={sendMessage}>
      <div className="input-group mb-3 position-fixed bottom-0 d-flex flex-column">
        <input type="text"
               className="form-control mb-2 w-50"
               value={author}
               placeholder="Sender"
               onChange={(e) => setAuthor(e.target.value)}
        />

        <textarea className="form-control mb-2 w-75"
                  placeholder="Recipient's username"
                  value={newMessage}
                  aria-placeholder="Message text"
                  onChange={(e) => setNewMessage(e.target.value)}
        />

        <button
          className="btn btn-primary w-25"
          type="submit"
        >Button
        </button>
      </div>
    </form>
  );
};

export default ChatForm;