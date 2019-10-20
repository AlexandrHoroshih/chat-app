import React from 'react';
import { Message } from './Message';
import classes from './chat.module.css';

const Chat: React.FC = () => {
  return (
    <div className={classes.chatWrapper}>
      <Message
        isMyMessage={false}
        userName={'Sasha'}
        message={'message message message'}
      />
      <Message
        isMyMessage={true}
        userName={'Not Sasha'}
        message={'aldksmdgsldgkmsdlgkmsdlgm'}
      />
    </div>
  );
};

export { Chat };
