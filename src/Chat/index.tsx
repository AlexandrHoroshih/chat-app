import React from 'react';
import { observer } from 'mobx-react';
import { chatStore, IMessage } from '../stores/chatStore';
import { Message } from './Message';
import classes from './chat.module.css';

const Chat: React.FC = observer(() => {
  const store = React.useContext(chatStore);

  return (
    <div className={classes.chatWrapper}>
      {store.messages.map((message: IMessage, i: number) => {
        return (
          <Message
            key={i}
            isMyMessage={store.myUser.id === message.id}
            userName={message.username}
            message={message.text}
            datetime={message.datetime}
          />
        );
      })}
    </div>
  );
});

export { Chat };
