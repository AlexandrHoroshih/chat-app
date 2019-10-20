import React from 'react';
import classes from './chat.module.css';

interface Props {
  isMyMessage: boolean;
  userName: string;
  message: string;
  datetime?: string;
}

const Message: React.FC<Props> = ({
  isMyMessage,
  userName,
  message,
  datetime,
}) => {
  return (
    <div
      className={
        isMyMessage ? classes.myMessageWrapper : classes.messageWrapper
      }
    >
      <div className={classes.message}>
        <h3 className={classes.username}>{userName}</h3>
        <p>{message}</p>
        <time>{datetime}</time>
      </div>
    </div>
  );
};

export { Message };
