import * as React from 'react';
import { IMessage } from '../../types';

interface Props {
  message: IMessage;
}

const OneMessage: React.FC<Props> = ({message}) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-header d-flex justify-content-between bg-primary text-white">
        <p className="m-0">Author: {message.author}</p>
        <p className="m-0">{new Date(message.datetime).toLocaleString()}</p>
      </div>
      <div className="card-body bg-light">
        {message.message}
      </div>
    </div>
  );
};

export default OneMessage;
