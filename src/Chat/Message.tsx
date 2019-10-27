import React from 'react';
import formatRelative from 'date-fns/formatRelative';
import classes from './chat.module.css';

interface Props {
  isMyMessage: boolean;
  userName: string;
  message: string;
  datetime: Date;
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
        <p className={classes.text}>{message}</p>
        <time className={classes.datetime}>
          {formatRelative(datetime, new Date())}
        </time>
      </div>
    </div>
  );
};

export { Message };
